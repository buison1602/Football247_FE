import React, { useState, useEffect, useRef } from 'react';
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
  Divider,
  SvgIcon,
  CircularProgress,
  Avatar
} from '@mui/material';

import {
  Menu as MenuIcon,
  Sports as SportsIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon
} from '@mui/icons-material';

import { useAuth } from '../contexts/AuthContext'; // Đường dẫn có thể khác

// Interfaces
interface Category {
  id: string;
  name: string;
  slug: string;
}
interface DropdownCategory extends Category {
  isDropdown?: boolean;
  dropdownItems?: Category[];
}
interface HeaderProps {
  onCategorySelect?: (category: Category) => void;
  activeCategory?: string;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

// Data
const otherCompetitionsItems: Category[] = [
  { id: '4', name: 'UEFA Nations League', slug: 'uefa-nations-league' },
  { id: '5', name: 'Europa League', slug: 'europa-league' },
  { id: '6', name: 'La Liga', slug: 'la-liga' },
  { id: '7', name: 'Bundesliga', slug: 'bundesliga' },
];
const mainCategories: DropdownCategory[] = [
  { id: '1', name: 'Home', slug: 'home' },
  { id: '2', name: 'Premier League', slug: 'premier-league' },
  { id: '3', name: 'World Cup 2026', slug: 'world-cup-2026' },
  {
    id: 'dropdown',
    name: 'Other Competitions',
    slug: 'other-competitions',
    isDropdown: true,
    dropdownItems: otherCompetitionsItems
  },
  { id: '8', name: 'Fixtures', slug: 'fixtures' },
  { id: '9', name: 'Results', slug: 'results' },
];
const allCategories: Category[] = [
    { id: '1', name: 'Home', slug: 'home' },
    { id: '2', name: 'Premier League', slug: 'premier-league' },
    { id: '3', name: 'World Cup 2026', slug: 'world-cup-2026' },
    ...otherCompetitionsItems,
    { id: '8', name: 'Fixtures', slug: 'fixtures' },
    { id: '9', name: 'Results', slug: 'results' },
];

const Header: React.FC<HeaderProps> = ({ onCategorySelect, activeCategory, onLoginClick, onSignupClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const [dropdownAnchor, setDropdownAnchor] = useState<null | HTMLElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const menuCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  // Lấy user và hàm logout từ context
  const { user, logout, loading } = useAuth();

  // Computed state for dropdown open
  const dropdownOpen = Boolean(dropdownAnchor);

  // Thêm state cho menu profile
  const [profileMenuAnchor, setProfileMenuAnchor] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
      setProfileMenuAnchor(null);
  };

  const handleLogout = () => {
      logout();
      handleProfileMenuClose();
  };

  // Get the dropdown data for the current category
  const dropdownData = mainCategories.find(cat => cat.isDropdown);

  const handleMenuEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (menuCloseTimeout.current) {
      clearTimeout(menuCloseTimeout.current);
      menuCloseTimeout.current = null;
    }
    setDropdownAnchor(event.currentTarget);
  };

  const handleMenuLeave = () => {
    if (menuCloseTimeout.current) {
      clearTimeout(menuCloseTimeout.current);
    }
    menuCloseTimeout.current = setTimeout(() => {
      setDropdownAnchor(null);
    }, 150); // Reduced timeout for better responsiveness
  };

  const handleDropdownEnter = () => {
    if (menuCloseTimeout.current) {
      clearTimeout(menuCloseTimeout.current);
      menuCloseTimeout.current = null;
    }
  };

  const handleDropdownLeave = () => {
    if (menuCloseTimeout.current) {
      clearTimeout(menuCloseTimeout.current);
    }
    menuCloseTimeout.current = setTimeout(() => {
      setDropdownAnchor(null);
    }, 150);
  };

  const handleItemClick = (category: Category) => {
    if (onCategorySelect) onCategorySelect(category);
    setDropdownAnchor(null);
    setMobileMenuAnchor(null);
  };

  const [visible, setVisible] = useState(true);
  const scrollPosition = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 10) {
        setVisible(true);
      } else {
        setVisible(scrollPosition.current > currentScrollPos);
      }
      scrollPosition.current = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };
  
  const handleSocialClick = (platform: string) => console.log(`${platform} clicked`);
  
  const handleSignupClick = () => {
    if (onSignupClick) onSignupClick();
  };



  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1100,
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.3s ease-in-out'
    }}>
      <Box sx={{ bgcolor: '#161e26', borderBottom: '1px solid #40444b', py: 1.5 }}>
        <Box sx={{ maxWidth: isDesktop ? 1080 : '100%', width: '100%', mx: 'auto', px: { xs: 2, md: 0 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <SportsIcon sx={{ color: '#00d4aa', mr: 1, fontSize: 28 }} />
            <Typography variant="h5" component="div" sx={{ fontWeight: 700, color: 'white', fontSize: { xs: '1.2rem', md: '1.4rem' } }}>Football247</Typography>
          </Box>
          
          {!isMobile && (
                        <Box display="flex" alignItems="center" gap={2}>
                            {loading ? (
                                <CircularProgress size={24} sx={{ color: '#00d4aa' }} />
                            ) : user ? (
                                <>
                                    <Button
                                        onClick={handleProfileMenuOpen}
                                        sx={{ 
                                            color: 'white', 
                                            textTransform: 'none',
                                            fontWeight: 600,
                                        }}
                                        startIcon={<Avatar sx={{ width: 32, height: 32, bgcolor: '#00d4aa' }}>{user.fullName.charAt(0).toUpperCase()}</Avatar>}
                                    >
                                        {user.fullName}
                                    </Button>
                                    <Menu
                                        anchorEl={profileMenuAnchor}
                                        open={Boolean(profileMenuAnchor)}
                                        onClose={handleProfileMenuClose}
                                        disableScrollLock={true}
                                    >
                                        <MenuItem onClick={handleProfileMenuClose}>My Profile</MenuItem>
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <>
                                    {onLoginClick && <Button variant="contained" onClick={onLoginClick} sx={{ bgcolor: '#00d4aa', /* ... */ }}>Login</Button>}
                                    {onSignupClick && <Button variant="outlined" onClick={onSignupClick} sx={{ color: '#00d4aa', /* ... */ }}>Sign up</Button>}
                                </>
                            )}
                        </Box>
                    )}

                    {isMobile && (
                        <Box ml="auto" display="flex" alignItems="center" gap={1}>
                            {loading ? (
                                 <CircularProgress size={20} sx={{ color: '#00d4aa' }} />
                            ) : user ? (
                                <IconButton onClick={handleProfileMenuOpen}>
                                    <Avatar sx={{ width: 28, height: 28, bgcolor: '#00d4aa' }}>{user.fullName.charAt(0).toUpperCase()}</Avatar>
                                </IconButton>
                            ) : (
                                <>
                                    {onLoginClick && <Button variant="contained" onClick={onLoginClick} size="small" sx={{ /* ... */ }}>Login</Button>}
                                    {onSignupClick && <Button variant="outlined" onClick={onSignupClick} size="small" sx={{ /* ... */ }}>Sign up</Button>}
                                </>
                            )}
                             <IconButton color="inherit" onClick={handleMobileMenuOpen} sx={{ color: 'white' }}><MenuIcon /></IconButton>
                        </Box>
                    )}
        </Box>
      </Box>

      <AppBar position="static" sx={{ bgcolor: '#0f1a24ff', height: 52, borderBottom: '1px solid #40444b' }}>
        <Box sx={{ maxWidth: isDesktop ? 1080 : '100%', width: '100%', mx: 'auto' }}>
          <Toolbar sx={{ minHeight: '52px !important', height: 52, px: { xs: 2, md: 0 } }}>
            {!isMobile && (
              <>
                <Box display="flex" alignItems="center" gap={0.5}>
                  {mainCategories.map((category) => (
                    <Box key={category.id} sx={{ position: 'relative' }}>
                      <Button
                        ref={category.isDropdown ? dropdownButtonRef : null}
                        onClick={() => !category.isDropdown && handleItemClick(category)}
                        onMouseEnter={category.isDropdown ? handleMenuEnter : undefined}
                        // Remove onMouseLeave from button to prevent flickering
                      sx={{
                        px: 2.5, py: 0.8, borderRadius: '100vh', fontSize: '0.87rem', fontWeight: 600, textTransform: 'none',
                        bgcolor: activeCategory === category.slug || (category.isDropdown && dropdownData?.dropdownItems?.some(item => item.slug === activeCategory)) || (category.isDropdown && dropdownOpen) ? '#00d4aa' : '#2c394b',
                        color: activeCategory === category.slug || (category.isDropdown && dropdownData?.dropdownItems?.some(item => item.slug === activeCategory)) || (category.isDropdown && dropdownOpen) ? '#161e26' : 'white',
                        '&:hover': { bgcolor: activeCategory === category.slug || (category.isDropdown && dropdownData?.dropdownItems?.some(item => item.slug === activeCategory)) || (category.isDropdown && dropdownOpen) ? '#00bfa5' : '#3c4f60' },
                      }}
                      >
                        {category.name}
                        {category.isDropdown && (
                          <SvgIcon
                            viewBox="0 0 32 32" // Định nghĩa hệ tọa độ cho path của bạn
                            sx={{
                              ml: 0.7,
                              fontSize: 'inherit', // Chỉnh kích thước icon
                              // Hiệu ứng xoay khi menu mở
                              transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease-in-out',
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16 24.62L1.44 10.06l2.12-2.12L16 20.38 28.44 7.94l2.12 2.12L16 24.62z"
                              fill="currentColor" // Lấy màu từ component cha
                            />
                          </SvgIcon>
                        )}
                      </Button>
                    </Box>
                  ))}
                </Box>
                
                {/* Simplified Menu for debugging */}
                <Menu
                  open={dropdownOpen}
                  anchorEl={dropdownAnchor}
                  onClose={handleDropdownLeave}
                  disableScrollLock={true}
                  sx={{
                    '& .MuiPaper-root': {
                      bgcolor: '#2c394b',
                      color: 'white',
                      minWidth: 200,
                      mt: 1
                    }
                  }}
                >
                  {/* Render dropdown items directly from otherCompetitionsItems to ensure they display */}
                  {otherCompetitionsItems.map((item) => (
                    <MenuItem
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      sx={{
                        cursor: 'pointer',
                        color: activeCategory === item.slug ? '#00d4aa' : 'white',
                        fontSize: '0.85rem',
                        py: 1.2,
                        px: 2,
                        '&:hover': {
                          bgcolor: 'rgba(0, 212, 170, 0.1)',
                          color: '#00d4aa'
                        },
                        borderLeft: activeCategory === item.slug ? '3px solid #00d4aa' : '3px solid transparent',
                        transition: 'all 0.2s ease-in-out'
                      }}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Menu>

                <Box display="flex" alignItems="center" sx={{ marginLeft: 'auto', gap: 0.8 }}>
                    <Box sx={{ width: '1.5px', height: '52px', bgcolor: 'rgba(255, 255, 255, 0.9)', mr: 1, transform: 'rotate(12deg)' }} />
                    <IconButton sx={{ color: 'white', '&:hover': { color: '#00d4aa' } }}><FacebookIcon sx={{ fontSize: 22 }} /></IconButton>
                    <IconButton sx={{ color: 'white', '&:hover': { color: '#00d4aa' } }}><TwitterIcon sx={{ fontSize: 22 }} /></IconButton>
                    <IconButton sx={{ color: 'white', '&:hover': { color: '#00d4aa' } }}><InstagramIcon sx={{ fontSize: 22 }} /></IconButton>
                </Box>
              </>
            )}
          </Toolbar>
        </Box>
      </AppBar>

      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
        sx={{ '& .MuiPaper-root': { bgcolor: '#2c2f33', border: '1px solid #40444b', borderRadius: 2, mt: 1, minWidth: 250 } }}
      >
        {allCategories.map((category) => (
          <MenuItem
            key={category.id}
            onClick={() => handleItemClick(category)}
            sx={{ cursor: 'pointer', color: activeCategory === category.slug ? '#00d4aa' : 'white', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)', color: '#00d4aa' } }}
          >
            {category.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export const HeaderSpacer: React.FC = () => {
  const headerHeight = 112; 
  return <Box sx={{ height: `${headerHeight}px`, width: '100%' }} />;
};

export default Header;