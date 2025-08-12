import React from 'react';
import {
  Box,
  Typography,
  Container,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  Sports
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const socialMediaLinks = [
    {
      name: 'Facebook',
      icon: <Facebook />,
      url: 'https://facebook.com/football247',
      color: '#1877f2'
    },
    {
      name: 'Twitter',
      icon: <Twitter />,
      url: 'https://twitter.com/football247',
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      icon: <Instagram />,
      url: 'https://instagram.com/football247',
      color: '#e4405f'
    }
  ];

  const footerLinks = [
    { name: 'About Football247', url: '/about' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'Terms & Conditions', url: '/terms' },
    { name: 'Privacy Policy & Cookie Notice', url: '/privacy' }
  ];

  const quickLinks = [
    { name: 'Premier League News', url: '/premier-league/news' },
    { name: 'Premier League Fixtures', url: '/premier-league/fixtures' },
    { name: 'Champions League News', url: '/champions-league/news' },
    { name: 'Champions League Fixtures', url: '/champions-league/fixtures' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #161e26 0%, #1f2c39 50%, #161e26 100%)',
        borderTop: '1px solid #40444b',
        mt: 6,
        py: 3,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #00d4aa 50%, transparent 100%)',
          opacity: 0.6
        }
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1080,
          px: { xs: 2, md: 0 },
          position: 'relative',
          zIndex: 1
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
          {/* Football247 Links - Left Column */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 25%' },
              minWidth: 0
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <Sports
                  sx={{
                    color: '#00d4aa',
                    fontSize: 28,
                    mr: 1
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.2rem'
                  }}
                >
                  Football247
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 2,
                  lineHeight: 1.6,
                  fontSize: '0.85rem'
                }}
              >
                Your ultimate destination for football news, fixtures, and live updates from around the world.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  width: '100%'
                }}
              >
                {footerLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        color: '#00d4aa',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Football247 Info Section - Center-Left Column */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 25%' },
              minWidth: 0
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  mb: 1,
                  fontSize: '1rem'
                }}
              >
                Latest Updates
              </Typography>

              <Divider
                sx={{
                  width: '40px',
                  height: '2px',
                  bgcolor: '#00d4aa',
                  mb: 2,
                  border: 'none'
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 2,
                  lineHeight: 1.6,
                  fontSize: '0.85rem'
                }}
              >
                Stay updated with the latest football news, match results, and transfer updates from top leagues worldwide.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.8rem',
                  fontStyle: 'italic'
                }}
              >
                "The beautiful game, covered beautifully."
              </Typography>
            </Box>
          </Box>

          {/* Quick Links - Center-Right Column */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 25%' },
              minWidth: 0
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  mb: 1,
                  fontSize: '1rem'
                }}
              >
                Quick Links
              </Typography>

              <Divider
                sx={{
                  width: '40px',
                  height: '2px',
                  bgcolor: '#00d4aa',
                  mb: 2,
                  border: 'none'
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  width: '100%'
                }}
              >
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        color: '#00d4aa',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Social Media Links - Right Column */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 25%' },
              minWidth: 0
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  mb: 1,
                  fontSize: '1rem'
                }}
              >
                Follow Us
              </Typography>

              <Divider
                sx={{
                  width: '40px',
                  height: '2px',
                  bgcolor: '#00d4aa',
                  mb: 2,
                  border: 'none'
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                {socialMediaLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      width: 40,
                      height: 40,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        bgcolor: social.color,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 4px 12px ${social.color}40`
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            my: 3,
            borderColor: 'rgba(255, 255, 255, 0.1)'
          }}
        />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.8rem',
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            © 2024 Football247. All rights reserved.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.8rem',
              textAlign: { xs: 'center', md: 'right' }
            }}
          >
            Made with ⚽ for football fans worldwide
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
