import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { TrendingUp, Sports, EmojiEvents } from '@mui/icons-material';

interface BannerProps {
  // Future props for dynamic banner content
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({
  title = "Football247 Premium",
  subtitle = "Get exclusive access to live match analysis, player statistics, and breaking news",
  ctaText = "Subscribe Now",
  onCtaClick = () => console.log('Banner CTA clicked')
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#32363b',
        py: { xs: 2, md: 3 },
        borderBottom: '1px solid #40444b'
      }}
    >
      <Box
        sx={{
          width: isMobile ? '95%' : '1080px',
          height: isMobile ? '60px' : '92px',
          bgcolor: '#161e26',
          borderRadius: 2,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          border: '1px solid #40444b'
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(31, 44, 57, 0.8) 100%)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '20%',
              right: '10%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 212, 170, 0.2) 0%, transparent 70%)',
              animation: 'pulse 3s ease-in-out infinite'
            },
            '@keyframes pulse': {
              '0%, 100%': {
                transform: 'scale(1)',
                opacity: 0.7
              },
              '50%': {
                transform: 'scale(1.1)',
                opacity: 0.9
              }
            }
          }}
        />

        {/* Content Container */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            p: { xs: 1.5, md: 2 },
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          {/* Left Side - Logo and Title */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            {/* Logo/Icon */}
            <Box
              sx={{
                p: 1,
                borderRadius: 1,
                bgcolor: 'rgba(0, 212, 170, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Sports sx={{ color: '#00d4aa', fontSize: { xs: 20, md: 24 } }} />
            </Box>

            {/* Title and Subtitle */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  lineHeight: 1.2,
                  mb: 0.5
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: { xs: '0.75rem', md: '0.85rem' },
                  lineHeight: 1.3,
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          </Box>

          {/* Right Side - CTA and Features */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            {/* Feature Tags - Hidden on mobile */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                alignItems: 'center'
              }}
            >
              {['Live Stats', 'Analysis', 'News'].map((tag, index) => (
                <Box
                  key={index}
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 1,
                    border: '1px solid rgba(0, 212, 170, 0.3)'
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#00d4aa',
                      fontWeight: 500,
                      fontSize: '0.7rem'
                    }}
                  >
                    {tag}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* CTA Button */}
            <Button
              onClick={onCtaClick}
              variant="contained"
              size="small"
              sx={{
                bgcolor: '#00d4aa',
                color: 'white',
                px: { xs: 2, md: 3 },
                py: 0.75,
                fontSize: { xs: '0.8rem', md: '0.9rem' },
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: 1.5,
                minWidth: 'auto',
                '&:hover': {
                  bgcolor: '#00a37a',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease-in-out'
              }}
            >
              {ctaText}
            </Button>
          </Box>
        </Box>

        {/* Right Side Decorative Element */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: { xs: '5%', md: '8%' },
            transform: 'translateY(-50%)',
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Box
            sx={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '3px solid rgba(0, 212, 170, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(0, 212, 170, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#00d4aa',
                fontWeight: 700,
                textAlign: 'center',
                lineHeight: 1
              }}
            >
              24/7
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
