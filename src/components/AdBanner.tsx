import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { TrendingUp, Sports, EmojiEvents } from '@mui/icons-material';

interface AdBannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const AdBanner: React.FC<AdBannerProps> = ({
  title = "Football247 Premium",
  subtitle = "Get exclusive access to live stats, match analysis, and breaking news",
  ctaText = "Subscribe Now",
  onCtaClick = () => console.log('Ad banner clicked')
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '660px',
        height: isMobile ? 'auto' : '260px',
        bgcolor: '#161e26',
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        border: '1px solid #40444b',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        mx: 'auto',
        my: 4,
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
          borderColor: '#00d4aa'
        }
      }}
      onClick={onCtaClick}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, 
            rgba(0, 212, 170, 0.1) 0%, 
            rgba(31, 44, 57, 0.8) 50%, 
            rgba(22, 30, 38, 0.9) 100%)`,
          zIndex: 1
        }}
      />

      {/* Content Container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          p: { xs: 3, md: 4 },
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        {/* Left Side - Content */}
        <Box sx={{ flex: 1, mr: { xs: 0, md: 3 } }}>
          {/* Icon Row */}
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              mb: 2,
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
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
              <Sports sx={{ color: '#00d4aa', fontSize: 20 }} />
            </Box>
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
              <TrendingUp sx={{ color: '#00d4aa', fontSize: 20 }} />
            </Box>
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
              <EmojiEvents sx={{ color: '#00d4aa', fontSize: 20 }} />
            </Box>
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 1.5,
              fontSize: { xs: '1.3rem', md: '1.5rem' },
              lineHeight: 1.2
            }}
          >
            {title}
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              mb: { xs: 3, md: 0 },
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: 1.4,
              maxWidth: '90%'
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        {/* Right Side - CTA */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}
        >
          {/* CTA Button */}
          <Box
            component="button"
            sx={{
              bgcolor: '#00d4aa',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 2,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 212, 170, 0.4)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                bgcolor: '#00a37a',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 16px rgba(0, 212, 170, 0.5)'
              }
            }}
          >
            {ctaText}
          </Box>

          {/* Features */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              gap: 0.5,
              alignItems: 'center'
            }}
          >
            {['Live Updates', 'Expert Analysis', 'Premium Content'].map((feature, index) => (
              <Typography
                key={index}
                variant="caption"
                sx={{
                  color: '#00d4aa',
                  fontSize: '0.75rem',
                  fontWeight: 500
                }}
              >
                ✓ {feature}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdBanner;
