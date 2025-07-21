import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  AccessTime,
  ChatBubbleOutline,
  Person
} from '@mui/icons-material';

export interface HorizontalArticle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  publishedAt: string;
  author: string;
  commentCount: number;
}

interface HorizontalArticleCardProps {
  article: HorizontalArticle;
}

const HorizontalArticleCard: React.FC<HorizontalArticleCardProps> = ({ article }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        width: isMobile ? '100%' : '680px',
        height: isMobile ? 'auto' : '144px',
        bgcolor: '#1f2c39',
        border: '1px solid #40444b',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        mb: 2,
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
          borderColor: '#00d4aa'
        }
      }}
    >
      {/* Article Image - Left Side */}
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', md: '260px' },
          height: { xs: 180, md: '140px' },
          objectFit: 'cover',
          flexShrink: 0,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)'
          }
        }}
        image={article.imageUrl}
        alt={article.title}
      />

      {/* Content Area - Right Side */}
      <CardContent
        sx={{
          flex: 1,
          p: 2,
          bgcolor: '#1f2c39',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: { xs: '100%', md: '420px' },
          minHeight: 0
        }}
      >
        {/* Top Row - Author and Time */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1
          }}
        >
          {/* Author */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            <Person sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.6)' }} />
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.7rem',
                fontWeight: 500
              }}
            >
              {article.author}
            </Typography>
          </Box>

          {/* Publication Time */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            <AccessTime sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.6)' }} />
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.7rem'
              }}
            >
              {article.publishedAt}
            </Typography>
          </Box>
        </Box>

        {/* Article Title */}
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 700,
            mb: 1,
            fontSize: { xs: '0.95rem', md: '1rem' },
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {article.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            mb: 1.5,
            fontSize: '0.8rem',
            lineHeight: 1.4,
            display: '-webkit-box',
            WebkitLineClamp: { xs: 2, md: 2 },
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flex: 1
          }}
        >
          {article.description}
        </Typography>

        {/* Bottom Row - Tags and Comments */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 'auto'
          }}
        >
          {/* Tags */}
          <Box
            sx={{
              display: 'flex',
              gap: 0.5,
              flexWrap: 'wrap',
              flex: 1,
              mr: 2
            }}
          >
            {article.tags.slice(0, 2).map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  bgcolor: 'rgba(0, 212, 170, 0.2)',
                  color: '#00d4aa',
                  border: '1px solid rgba(0, 212, 170, 0.3)',
                  fontSize: '0.65rem',
                  height: 20,
                  '&:hover': {
                    bgcolor: 'rgba(0, 212, 170, 0.3)'
                  }
                }}
              />
            ))}
          </Box>

          {/* Comment Count */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              flexShrink: 0
            }}
          >
            <ChatBubbleOutline sx={{ fontSize: 16, color: '#00d4aa' }} />
            <Typography
              variant="caption"
              sx={{
                color: '#00d4aa',
                fontSize: '0.7rem',
                fontWeight: 600
              }}
            >
              {article.commentCount}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HorizontalArticleCard;
