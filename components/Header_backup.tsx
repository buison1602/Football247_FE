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
  id: number;
  name: string;
  slug: string;
}

interface HeaderProps {
  onCategorySelect?: (category: Category) => void;
  activeCategory?: string;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

// Sample categories data
const mainCategories: Category[] = [
  { id: 1, name: 'Tin tức', slug: 'tin-tuc' },
  { id: 2, name: 'Bóng đá Việt Nam', slug: 'bong-da-viet-nam' },
  { id: 3, name: 'Bóng đá Quốc tế', slug: 'bong-da-quoc-te' },
  { id: 4, name: 'Video', slug: 'video' },
];

const subCategories: Category[] = [
  { id: 5, name: 'Chuyển nhượng', slug: 'chuyen-nhuong' },
  { id: 6, name: 'Kết quả', slug: 'ket-qua' },
  { id: 7, name: 'Lịch thi đấu', slug: 'lich-thi-dau' },
  { id: 8, name: 'Bảng xếp hạng', slug: 'bang-xep-hang' },
];

// All categories combined for mobile menu
const allCategories: Category[] = [...mainCategories, ...subCategories];

const Header: React.FC<HeaderProps> = ({ onCategorySelect, activeCategory, onLoginClick, onSignupClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

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
          bgcolor: '#2c2f33',
          borderBottom: '1px solid #40444b',
          py: 1.5
        }}
      >
        <Box
          sx={{
            maxWidth: isDesktop ? 1080 : '100%',
            width: '100%',
            mx: 'auto',
            px: { xs: 2, md: 4 },
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
          bgcolor: '#36393f',
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
            mx: 'auto',
            px: { xs: 2, md: 4 }
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
                {/* Navigation Categories and More Button */}
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

                  {/* More Dropdown Button */}
                  <Box
                    onMouseEnter={() => setShowMoreMenu(true)}
                    onMouseLeave={() => setShowMoreMenu(false)}
                    sx={{
                      position: 'relative'
                    }}
                  >
                    <Button
                      sx={{
                        color: subCategories.some(cat => activeCategory === cat.slug) ? '#00d4aa' : 'white',
                        fontWeight: subCategories.some(cat => activeCategory === cat.slug) ? 600 : 400,
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
                        // Active indicator for subcategories
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: subCategories.some(cat => activeCategory === cat.slug) ? '80%' : '0%',
                          height: 2,
                          bgcolor: '#00d4aa',
                          borderRadius: 1,
                          transition: 'width 0.3s ease-in-out'
                        }
                      }}
                    >
                      More
                    </Button>

                    {/* Dropdown Menu */}
                    <Box
                      sx={{
                        display: showMoreMenu ? 'block' : 'none',
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        bgcolor: '#2c2f33',
                        border: '1px solid #40444b',
                        borderRadius: 2,
                        mt: 1,
                        minWidth: 180,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        zIndex: 1300,
                        py: 1
                      }}
                    >
                      {subCategories.map((category) => (
                        <Box
                          key={category.id}
                          onClick={() => handleCategoryClick(category)}
                          sx={{
                            color: activeCategory === category.slug ? '#00d4aa' : 'white',
                            fontWeight: activeCategory === category.slug ? 600 : 400,
                            fontSize: '0.85rem',
                            py: 1.2,
                            px: 2,
                            cursor: 'pointer',
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
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
