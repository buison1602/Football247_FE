import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

interface MailboxCardProps {
  image: string;
  title: string;
  time: string;
  comments: number;
}

const MailboxCard: React.FC<MailboxCardProps> = ({ image, title, time, comments }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Fallback image in case the main image fails to load
  const fallbackImage = 'https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: isMobile ? '100%' : '340px',
        height: isMobile ? 'auto' : '302px',
        mb: 2,
        bgcolor: '#1f2c39',
        border: '1px solid #40444b',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
          borderColor: '#00d4aa'
        }
      }}
    >
      <CardMedia
        component="img"
        height={isMobile ? 120 : 180}
        image={image}
        alt={title}
        onError={(e: any) => {
          // Fallback to default image if the original fails to load
          e.target.src = fallbackImage;
        }}
        sx={{
          objectFit: 'cover',
          flexShrink: 0,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)'
          }
        }}
      />
      <CardContent
        sx={{
          flex: 1,
          p: 2,
          bgcolor: '#1f2c39',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={600}
          gutterBottom
          sx={{
            color: 'white',
            fontSize: '0.95rem',
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            mb: 2
          }}
        >
          {title}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.75rem'
            }}
          >
            {time}
          </Typography>
          <Box display="flex" alignItems="center">
            <ChatBubbleOutlineIcon
              sx={{
                fontSize: 16,
                mr: 0.5,
                color: '#00d4aa'
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: '#00d4aa',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            >
              {comments}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MailboxCard;