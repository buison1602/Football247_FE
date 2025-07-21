import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { TrendingUp, Notifications, Star } from '@mui/icons-material';

interface MailboxAdBanner2Props {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const MailboxAdBanner2: React.FC<MailboxAdBanner2Props> = ({
  title = "Football247 Alerts",
  subtitle = "Never miss a goal, card, or match update with instant notifications",
  ctaText = "Enable Alerts",
  onCtaClick = () => console.log('Mailbox ad banner 2 clicked')
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '340px',
        height: isMobile ? 'auto' : '250px',
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
            rgba(0, 212, 170, 0.15) 0%, 
            rgba(31, 44, 57, 0.9) 50%, 
            rgba(22, 30, 38, 0.95) 100%)`,
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
            variant="h6"
            component="h3"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 1.5,
              fontSize: '1.1rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              mb: 3,
              lineHeight: 1.4,
              fontSize: '0.85rem'
            }}
          >
            {subtitle}
          </Typography>

          {/* Feature Icons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              mb: 3
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
              <TrendingUp sx={{ color: '#00d4aa', fontSize: 24 }} />
              <Typography variant="caption" color="white" sx={{ fontSize: '0.7rem' }}>
                Live Stats
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
              <Notifications sx={{ color: '#00d4aa', fontSize: 24 }} />
              <Typography variant="caption" color="white" sx={{ fontSize: '0.7rem' }}>
                Instant Alerts
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
              <Star sx={{ color: '#00d4aa', fontSize: 24 }} />
              <Typography variant="caption" color="white" sx={{ fontSize: '0.7rem' }}>
                Premium
              </Typography>
            </Box>
          </Box>
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
              fontSize: '0.9rem',
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

          {/* Additional Info */}
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mt: 1,
              fontSize: '0.7rem',
              textAlign: 'center'
            }}
          >
            Free for 7 days, then $4.99/month
          </Typography>
        </Box>
      </Box>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -20,
          right: -20,
          width: 60,
          height: 60,
          borderRadius: '50%',
          bgcolor: 'rgba(0, 212, 170, 0.1)',
          zIndex: 1
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -15,
          left: -15,
          width: 40,
          height: 40,
          borderRadius: '50%',
          bgcolor: 'rgba(0, 212, 170, 0.08)',
          zIndex: 1
        }}
      />
    </Box>
  );
};

export default MailboxAdBanner2;
