import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Alert,
  InputAdornment,
  Fade,
  CircularProgress
} from '@mui/material';
import {
  Close as CloseIcon,
  Visibility,
  VisibilityOff,
  ArrowBackIos,
  ArrowForwardIos,
  FiberManualRecord,
  Google as GoogleIcon
} from '@mui/icons-material';

interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
}

// Football slider data
const sliderData: SlideData[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80',
    title: 'Premier League Excellence',
    description: 'Experience the thrill of the world\'s most competitive football league with live updates and exclusive content.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'World Cup 2026 Journey',
    description: 'Follow the road to the World Cup 2026 with comprehensive coverage of qualifiers and team preparations.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'UEFA Nations League',
    description: 'Stay updated with Europe\'s premier national team competition featuring the continent\'s best players.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    title: 'Stadium Atmosphere',
    description: 'Feel the electric atmosphere of world-class stadiums and passionate fans from around the globe.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Champions in Action',
    description: 'Witness legendary moments and rising stars as they make their mark in football history.'
  }
];

const AuthDialog: React.FC<AuthDialogProps> = ({ open, onClose, initialMode = 'login' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Form state
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  // Auto-advance slider
  useEffect(() => {
    if (!open || isSliderPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [open, isSliderPaused]);

  // Reset form when dialog opens/closes or mode changes
  useEffect(() => {
    if (open) {
      setMode(initialMode);
    } else {
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      setErrors({});
      setLoading(false);
      setCurrentSlide(0);
    }
  }, [open, initialMode]);

  useEffect(() => {
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  }, [mode]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    // Signup-specific validation
    if (mode === 'signup') {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      } else if (formData.name.length < 2) {
        newErrors.name = 'Name must be at least 2 characters long';
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // TODO: Replace with actual API calls
      if (mode === 'login') {
        console.log('Login attempt:', { email: formData.email, password: formData.password });
        // Handle successful login
      } else {
        console.log('Signup attempt:', {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        // Handle successful signup
      }

      // Close dialog on success
      onClose();
    } catch (error) {
      setErrors({
        general: mode === 'login'
          ? 'Invalid email or password. Please try again.'
          : 'Registration failed. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSliderNavigation = (direction: 'prev' | 'next') => {
    setCurrentSlide(prev => {
      if (direction === 'next') {
        return (prev + 1) % sliderData.length;
      } else {
        return prev === 0 ? sliderData.length - 1 : prev - 1;
      }
    });
  };

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleGoogleSignIn = () => {
    console.log(`Google ${mode === 'login' ? 'Sign In' : 'Sign Up'} clicked`);
    // TODO: Implement Google OAuth integration
    // This would typically involve:
    // 1. Initialize Google OAuth client
    // 2. Trigger Google sign-in flow
    // 3. Handle the response and user data
    // 4. Create/authenticate user in your backend
  };

  if (!open) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'transparent',
          boxShadow: 'none',
          overflow: 'hidden',
          borderRadius: 3,
          maxHeight: '90vh',
          width: isMobile ? '95%' : '900px',
          margin: 'auto'
        }
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 10,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.7)'
            }
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            minHeight: isMobile ? 'auto' : '600px',
            bgcolor: '#161e26',
            borderRadius: 3,
            overflow: 'hidden'
          }}
        >
          {/* Left Column - Authentication Forms */}
          <Box
            sx={{
              flex: isMobile ? 'none' : 1,
              bgcolor: '#161e26',
              p: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: isMobile ? '500px' : '600px'
            }}
          >
            {/* Logo and Welcome */}
            <Box mb={4} textAlign="center">
              <Typography
                variant="h4"
                sx={{
                  color: '#00d4aa',
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: '1.8rem', md: '2.2rem' }
                }}
              >
                Football247
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 400,
                  mb: 1,
                  fontSize: { xs: '1.1rem', md: '1.3rem' }
                }}
              >
                {mode === 'login' ? 'Welcome Back!' : 'Join Our Community!'}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: { xs: '0.85rem', md: '0.9rem' }
                }}
              >
                {mode === 'login'
                  ? 'Sign in to access exclusive football content and updates'
                  : 'Create your account to get personalized football news and insights'
                }
              </Typography>
            </Box>

            {/* Modern Segmented Control Toggle */}
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                bgcolor: '#1f2c39',
                borderRadius: 2.5,
                p: 0.4,
                mb: 3,
                maxWidth: '330px',
                mx: 'auto',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden'
              }}
            >
              {/* Sliding Indicator/Pill */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '4px',
                  left: mode === 'login' ? '4px' : 'calc(50% - 2px)',
                  width: 'calc(50% - 4px)',
                  height: 'calc(100% - 8px)',
                  bgcolor: '#00d4aa',
                  borderRadius: 2,
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 2px 8px rgba(0, 212, 170, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)',
                  background: 'linear-gradient(135deg, #00d4aa 0%, #00b894 100%)',
                  zIndex: 1
                }}
              />

              {/* Login Button */}
              <Button
                onClick={() => setMode('login')}
                sx={{
                  flex: 1,
                  py: 0.6,
                  px: 2,
                  bgcolor: 'transparent',
                  color: mode === 'login' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  fontWeight: mode === 'login' ? 600 : 500,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '0.85rem',
                  minHeight: '28px',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    bgcolor: 'transparent',
                    color: mode === 'login' ? 'white' : 'rgba(255, 255, 255, 0.9)',
                    transform: 'scale(1.02)',
                    textShadow: mode === 'login' ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none'
                  },
                  '&:active': {
                    transform: 'scale(0.98)',
                    transition: 'transform 0.1s ease-in-out'
                  }
                }}
              >
                Login
              </Button>

              {/* Sign Up Button */}
              <Button
                onClick={() => setMode('signup')}
                sx={{
                  flex: 1,
                  py: 0.6,
                  px: 2,
                  bgcolor: 'transparent',
                  color: mode === 'signup' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  fontWeight: mode === 'signup' ? 600 : 500,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '0.85rem',
                  minHeight: '28px',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    bgcolor: 'transparent',
                    color: mode === 'signup' ? 'white' : 'rgba(255, 255, 255, 0.9)',
                    transform: 'scale(1.02)',
                    textShadow: mode === 'signup' ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none'
                  },
                  '&:active': {
                    transform: 'scale(0.98)',
                    transition: 'transform 0.1s ease-in-out'
                  }
                }}
              >
                Sign Up
              </Button>
            </Box>

            {/* Error Alert */}
            {errors.general && (
              <Alert
                severity="error"
                sx={{
                  mb: 2,
                  bgcolor: 'rgba(244, 67, 54, 0.1)',
                  color: '#f44336',
                  '& .MuiAlert-icon': {
                    color: '#f44336'
                  }
                }}
              >
                {errors.general}
              </Alert>
            )}

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit}>
              {/* Name Field (Signup only) */}
              {mode === 'signup' && (
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      mb: 1,
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                  >
                    Full Name
                  </Typography>
                  <TextField
                    fullWidth
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    error={!!errors.name}
                    helperText={errors.name}
                    placeholder="Enter your full name"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: '44px',
                        bgcolor: '#1f2c39',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00d4aa'
                        }
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                        padding: '10px 14px'
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.5)',
                        opacity: 1
                      }
                    }}
                  />
                </Box>
              )}

              {/* Email Field */}
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 1,
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }}
                >
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  error={!!errors.email}
                  helperText={errors.email}
                  placeholder="Enter your email address"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '44px',
                      bgcolor: '#1f2c39',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)'
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#00d4aa'
                      }
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                      padding: '10px 14px'
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'rgba(255, 255, 255, 0.5)',
                      opacity: 1
                    }
                  }}
                />
              </Box>

              {/* Password Field */}
              <Box sx={{ mb: mode === 'signup' ? 2 : 3 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 1,
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }}
                >
                  Password
                </Typography>
                <TextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange('password')}
                  error={!!errors.password}
                  helperText={errors.password}
                  placeholder="Enter your password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)'
                          }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '44px',
                      bgcolor: '#1f2c39',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)'
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#00d4aa'
                      }
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                      padding: '10px 14px'
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'rgba(255, 255, 255, 0.5)',
                      opacity: 1
                    }
                  }}
                />
              </Box>

              {/* Confirm Password Field (Signup only) */}
              {mode === 'signup' && (
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      mb: 1,
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                  >
                    Confirm Password
                  </Typography>
                  <TextField
                    fullWidth
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleInputChange('confirmPassword')}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    placeholder="Confirm your password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            edge="end"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)'
                            }}
                          >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: '44px',
                        bgcolor: '#1f2c39',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00d4aa'
                        }
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                        padding: '10px 14px'
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.5)',
                        opacity: 1
                      }
                    }}
                  />
                </Box>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  bgcolor: '#00d4aa',
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  mb: 2,
                  '&:hover': {
                    bgcolor: '#00a37a',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(0, 212, 170, 0.3)'
                  },
                  '&:disabled': {
                    bgcolor: 'rgba(0, 212, 170, 0.3)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: 'white' }} />
                ) : (
                  mode === 'login' ? 'Sign In' : 'Create Account'
                )}
              </Button>

              {/* Divider */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    height: '1px',
                    bgcolor: 'rgba(255, 255, 255, 0.2)'
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    px: 2,
                    fontSize: '0.8rem'
                  }}
                >
                  or
                </Typography>
                <Box
                  sx={{
                    flex: 1,
                    height: '1px',
                    bgcolor: 'rgba(255, 255, 255, 0.2)'
                  }}
                />
              </Box>

              {/* Google Sign-In Button */}
              <Button
                fullWidth
                variant="outlined"
                onClick={handleGoogleSignIn}
                disabled={loading}
                sx={{
                  py: 1.5,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  borderRadius: 2,
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  bgcolor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  '&:hover': {
                    borderColor: '#00d4aa',
                    bgcolor: 'rgba(0, 212, 170, 0.05)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 2px 8px rgba(0, 212, 170, 0.2)'
                  },
                  '&:disabled': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <GoogleIcon sx={{ fontSize: 20 }} />
                {mode === 'login' ? 'Sign in with Google' : 'Sign up with Google'}
              </Button>
            </Box>
          </Box>

          {/* Right Column - Football Image Slider (Desktop only) */}
          {!isMobile && (
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                overflow: 'hidden',
                bgcolor: '#1f2c39'
              }}
              onMouseEnter={() => setIsSliderPaused(true)}
              onMouseLeave={() => setIsSliderPaused(false)}
            >
              {/* Slider Container */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {sliderData.map((slide, index) => (
                  <Fade
                    key={slide.id}
                    in={index === currentSlide}
                    timeout={800}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      display: index === currentSlide ? 'block' : 'none'
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'flex-end',
                        p: 4
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            color: 'white',
                            fontWeight: 700,
                            mb: 2,
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                          }}
                        >
                          {slide.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                            maxWidth: '80%'
                          }}
                        >
                          {slide.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Fade>
                ))}

                {/* Navigation Arrows */}
                <IconButton
                  onClick={() => handleSliderNavigation('prev')}
                  sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                      transform: 'translateY(-50%) scale(1.1)'
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <ArrowBackIos />
                </IconButton>

                <IconButton
                  onClick={() => handleSliderNavigation('next')}
                  sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                      transform: 'translateY(-50%) scale(1.1)'
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <ArrowForwardIos />
                </IconButton>

                {/* Slide Indicators */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1
                  }}
                >
                  {sliderData.map((_, index) => (
                    <IconButton
                      key={index}
                      onClick={() => handleSlideClick(index)}
                      sx={{
                        p: 0.5,
                        color: index === currentSlide ? '#00d4aa' : 'rgba(255, 255, 255, 0.5)',
                        '&:hover': {
                          color: '#00d4aa',
                          transform: 'scale(1.2)'
                        },
                        transition: 'all 0.2s ease-in-out'
                      }}
                    >
                      <FiberManualRecord sx={{ fontSize: 12 }} />
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;