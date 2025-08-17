import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  Sports as SportsIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon
} from '@mui/icons-material';

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface HeaderProps {
  onCategorySelect?: (category: Category) => void;
  activeCategory?: string;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

// Football categories data
const mainCategories: Category[] = [
  { id: '1', name: 'Premier League', slug: 'premier-league' },
  { id: '2', name: 'World Cup 2026', slug: 'world-cup-2026' },
  { id: '3', name: 'UEFA Nations League', slug: 'uefa-nations-league' },
  { id: '4', name: 'Europa League', slug: 'europa-league' },
  { id: '5', name: 'La Liga', slug: 'la-liga' },
  { id: '6', name: 'Serie A', slug: 'serie-a' },
  { id: '7', name: 'Bundesliga', slug: 'bundesliga' },
  { id: '8', name: 'Fixtures', slug: 'fixtures' },
  { id: '9', name: 'Results', slug: 'results' },
];

// All categories for mobile menu (same as main categories)
const allCategories: Category[] = [...mainCategories];

const Header: React.FC<HeaderProps> = ({ onCategorySelect, activeCategory, onLoginClick, onSignupClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const handleCategoryClick = (category: Category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
    // Close menus if open
    setMobileMenuAnchor(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleSocialClick = (platform: string) => {
    console.log(`${platform} clicked`);
    // TODO: Add actual social media links
  };

  const handleSignupClick = () => {
    console.log('Sign up clicked');
    if (onSignupClick) {
      onSignupClick();
    }
  };

  return (
    <Box>
      {/* Top Row - Logo, Login and Signup */}
      <Box
        sx={{
          bgcolor: '#161e26',
          borderBottom: '1px solid #40444b',
          py: 1.5
        }}
      >
        <Box
          sx={{
            maxWidth: isDesktop ? 1080 : '100%',
            width: '100%',
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo/Brand */}
          <Box display="flex" alignItems="center">
            <SportsIcon sx={{ color: '#00d4aa', mr: 1, fontSize: 28 }} />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                color: 'white',
                fontSize: { xs: '1.2rem', md: '1.4rem' },
                letterSpacing: '0.5px'
              }}
            >
              Football247
            </Typography>
          </Box>

          {/* Login and Signup Buttons - Desktop */}
          {!isMobile && (
            <Box display="flex" alignItems="center" gap={2}>
              {onLoginClick && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onLoginClick}
                  sx={{
                    bgcolor: '#00d4aa',
                    fontSize: '0.85rem',
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#00a37a',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 4px 12px rgba(0, 212, 170, 0.3)'
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  Login
                </Button>
              )}
              {onSignupClick && (
                <Button
                  variant="outlined"
                  onClick={handleSignupClick}
                  sx={{
                    color: '#00d4aa',
                    borderColor: '#00d4aa',
                    fontSize: '0.85rem',
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#00d4aa',
                      color: 'white',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 4px 12px rgba(0, 212, 170, 0.3)'
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  Sign up
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Box>

      {/* Bottom Row - Navigation */}
      <AppBar
        position="sticky"
        sx={{
          bgcolor: '#1f2c39',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          borderBottom: '1px solid #40444b',
          height: 60,
          position: 'relative'
        }}
      >
        <Box
          sx={{
            maxWidth: isDesktop ? 1080 : '100%',
            width: '100%',
            mx: 'auto'
          }}
        >
          <Toolbar
            sx={{
              minHeight: '60px !important',
              height: 60,
              px: 0
            }}
          >
            {/* Desktop Navigation */}
            {!isMobile && (
              <>
                {/* Navigation Categories */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap={0.5}
                  sx={{
                    flexWrap: 'nowrap',
                    overflow: 'hidden'
                  }}
                >
                  {mainCategories.map((category) => (
                    <Button
                      key={category.id}
                      onClick={() => handleCategoryClick(category)}
                      sx={{
                        color: activeCategory === category.slug ? '#00d4aa' : 'white',
                        fontWeight: activeCategory === category.slug ? 600 : 400,
                        fontSize: '0.85rem',
                        textTransform: 'none',
                        px: 1.2,
                        py: 1,
                        borderRadius: 2,
                        position: 'relative',
                        minWidth: 'auto',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.08)',
                          color: '#00d4aa',
                          transform: 'translateY(-1px)',
                          transition: 'all 0.2s ease-in-out'
                        },
                        '&:active': {
                          transform: 'translateY(0)'
                        },
                        // Active indicator
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: activeCategory === category.slug ? '80%' : '0%',
                          height: 2,
                          bgcolor: '#00d4aa',
                          borderRadius: 1,
                          transition: 'width 0.3s ease-in-out'
                        }
                      }}
                    >
                      {category.name}
                    </Button>
                  ))}
                </Box>

                {/* Social Media Icons - Positioned at Far Right */}
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    marginLeft: 'auto',
                    gap: 0.8
                  }}
                >
                  {/* Visual Separator - Tilted Vertical Line */}
                  <Box
                    sx={{
                      width: '1px',
                      height: '60px',
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      mr: 1,
                      alignSelf: 'stretch',
                      display: 'flex',
                      alignItems: 'center',
                      transform: 'rotate(12deg)',
                      transformOrigin: 'center'
                    }}
                  />

                  {/* Social Media Icons */}
                  <IconButton
                    onClick={() => handleSocialClick('Facebook')}
                    sx={{
                      color: 'white',
                      p: 0.4,
                      '&:hover': {
                        color: '#00d4aa',
                        transform: 'translateY(-1px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <FacebookIcon sx={{ fontSize: 22 }} />
                  </IconButton>
                  <IconButton
                    onClick={() => handleSocialClick('Twitter')}
                    sx={{
                      color: 'white',
                      p: 0.4,
                      '&:hover': {
                        color: '#00d4aa',
                        transform: 'translateY(-1px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <TwitterIcon sx={{ fontSize: 22 }} />
                  </IconButton>
                  <IconButton
                    onClick={() => handleSocialClick('Instagram')}
                    sx={{
                      color: 'white',
                      p: 0.4,
                      '&:hover': {
                        color: '#00d4aa',
                        transform: 'translateY(-1px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <InstagramIcon sx={{ fontSize: 22 }} />
                  </IconButton>
                </Box>
              </>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Box ml="auto" display="flex" alignItems="center" gap={1}>
                {onLoginClick && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={onLoginClick}
                    size="small"
                    sx={{
                      bgcolor: '#00d4aa',
                      fontSize: '0.75rem',
                      '&:hover': {
                        bgcolor: '#00a37a'
                      }
                    }}
                  >
                    Login
                  </Button>
                )}
                {onSignupClick && (
                  <Button
                    variant="outlined"
                    onClick={handleSignupClick}
                    size="small"
                    sx={{
                      color: '#00d4aa',
                      borderColor: '#00d4aa',
                      fontSize: '0.75rem',
                      '&:hover': {
                        bgcolor: '#00d4aa',
                        color: 'white'
                      }
                    }}
                  >
                    Sign up
                  </Button>
                )}
                <IconButton
                  color="inherit"
                  onClick={handleMobileMenuOpen}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.08)'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}

            {/* Mobile Menu */}
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
              sx={{
                '& .MuiPaper-root': {
                  bgcolor: '#2c2f33',
                  border: '1px solid #40444b',
                  borderRadius: 2,
                  mt: 1,
                  minWidth: 250,
                  maxHeight: '70vh',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              {allCategories.map((category, index) => [
                <MenuItem
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  sx={{
                    color: activeCategory === category.slug ? '#00d4aa' : 'white',
                    fontWeight: activeCategory === category.slug ? 600 : 400,
                    fontSize: '0.85rem',
                    py: 1.2,
                    px: 2,
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                      color: '#00d4aa'
                    },
                    // Active indicator
                    borderLeft: activeCategory === category.slug ? '3px solid #00d4aa' : '3px solid transparent',
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  {category.name}
                </MenuItem>,
                // Add divider after main categories
                index === mainCategories.length - 1 && (
                  <Divider key="divider" sx={{ bgcolor: '#40444b', my: 1 }} />
                )
              ])}
            </Menu>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
