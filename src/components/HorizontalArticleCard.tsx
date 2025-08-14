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
import { ChatBubbleOutline } from '@mui/icons-material';

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
        height: isMobile ? 'auto' : '152px',
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
      {/* Image wrapper để thấy nền khi padding */}
      <Box
        sx={{
          width: { xs: '100%', md: '268px' },  // 260 ảnh + 8 padding
          height: { xs: 188, md: 149 },        // 134 ảnh + 8 padding
          flexShrink: 0,
          bgcolor: '#1f2c39',
          p: '4px',
          boxSizing: 'border-box'
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '6px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.02)' }
          }}
          image={article.imageUrl}
          alt={article.title}
        />
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          p: 0,
          bgcolor: '#1f2c39',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: { xs: '100%', md: '420px' },
          minHeight: 0,
          '&:last-child': {
            pl: '10px',
            pt: '4px',
            pb: '6px',
            pr: '6px'
          }
        }}
      >
        {/* Author + Time (bên trái, cùng một hàng) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#E8E8E8', // ✅ đổi màu
              fontSize: '0.8rem', // gần giống ArticleGrid
              fontWeight: 500,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '50%'
            }}
            title={article.author}
          >
            {article.author}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: '#E8E8E8', // ✅ đổi màu
              fontSize: '0.8rem', // gần giống ArticleGrid
              whiteSpace: 'nowrap'
            }}
            title={article.publishedAt}
          >
            {article.publishedAt}
          </Typography>
        </Box>


        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            mb: '4px',
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '0.95rem', md: '1rem' },
            lineHeight: '1.3rem',
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
        <Box
          sx={{
            lineHeight: 1.4,            // phải khớp với Typography bên trong
            maxHeight: '2.8em',         // 1.4 * 2 dòng
            height: '2.8em',            // khóa cứng
            overflow: 'hidden',         // ẩn phần dư
            mb: 1.5,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.75rem',
              lineHeight: 1.4,                // KHỚP với Box
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              // ❗ đừng để flex:1 ở đây
              mb: 0,                          // tránh cộng thêm khoảng dưới
            }}
          >
            {article.description}
          </Typography>
        </Box>


        {/* Tags + Comments */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 'auto'
          }}
        >
          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', flex: 1, mr: 2 }}>
            {article.tags.slice(0, 2).map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  bgcolor: 'rgba(0, 212, 170, 0.2)',
                  color: '#00d4aa',
                  border: '1px solid rgba(0, 212, 170, 0.3)',
                  fontSize: '0.75rem',
                  height: 24,
                  borderRadius: '8px',
                  '&:hover': {
                    bgcolor: 'rgba(0, 212, 170, 0.3)',
                    color: '#ffffff',
                    borderColor: '#09ebbdff'
                  }
                }}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
            <ChatBubbleOutline sx={{ fontSize: 16, color: '#00d4aa' }} />
            <Typography variant="caption" sx={{ color: '#00d4aa', fontSize: '0.7rem', fontWeight: 600 }}>
              {article.commentCount}
            </Typography>
          </Box>
        </Box>

      </CardContent>
    </Card>
  );
};

export default HorizontalArticleCard;
