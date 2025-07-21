import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { TrendingUp, Sports, EmojiEvents } from '@mui/icons-material';

interface MailboxAdBannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const MailboxAdBanner: React.FC<MailboxAdBannerProps> = ({
  title = "Football247 Premium",
  subtitle = "Get exclusive access to live match analysis and breaking news",
  ctaText = "Subscribe Now",
  onCtaClick = () => console.log('Mailbox ad banner clicked')
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '340px',
        height: isMobile ? 'auto' : '600px',
        bgcolor: '#161e26',
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        border: '1px solid #40444b',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        mt: 2,
        mb: 4,
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
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between'
        }}
      >
        {/* Top Section - Title and Icons */}
        <Box>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              mb: 3,
              lineHeight: 1.5
            }}
          >
            {subtitle}
          </Typography>

          {/* Feature Icons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 4
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <TrendingUp sx={{ color: '#00d4aa', fontSize: 28 }} />
              <Typography variant="body1" color="white">
                Real-time match statistics
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Sports sx={{ color: '#00d4aa', fontSize: 28 }} />
              <Typography variant="body1" color="white">
                Exclusive player interviews
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <EmojiEvents sx={{ color: '#00d4aa', fontSize: 28 }} />
              <Typography variant="body1" color="white">
                Tournament predictions
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Middle Section - Image */}
        <Box
          sx={{
            my: 4,
            height: '200px',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 1
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1508098682722-e99c643e7f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Football stadium"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
        </Box>

        {/* Bottom Section - CTA */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 'auto'
          }}
        >
          {/* CTA Button */}
          <Box
            component="button"
            sx={{
              bgcolor: '#00d4aa',
              color: 'white',
              width: '100%',
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
        </Box>
      </Box>
    </Box>
  );
};

export default MailboxAdBanner;
