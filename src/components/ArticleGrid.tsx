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
import AdBanner from './AdBanner';
import PremierLeagueRankings from './PremierLeagueRankings';
import HorizontalArticleCard from './HorizontalArticleCard';
import ArticleSchema from './ArticleSchema';
import { formatDateForDateTime } from '../utils/date';

export interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  publishedAt: string; // Human-readable format (e.g., "2 hours ago")
  publishedAtRaw: string | null; // Original date string from API for datetime attribute
  author: string;
  commentCount: number;
  priority?: number; // 1 for featured article
}

interface ArticleGridProps {
  articles: Article[];
}

const ArticleCard: React.FC<{ article: Article; featured?: boolean }> = ({
  article,
  featured = false
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Responsive kích thước
  const sizes = featured
    ? {
        cardW: { xs: '100%', md: '680px' },
        cardH: { xs: 'auto', md: 'auto' },        // 👈 cho phép nở theo nội dung
        imgH: { xs: 200, sm: 240, md: 320 }
      }
    : {
        cardW: { xs: '100%', md: '330px' },
        cardH: { xs: 'auto', md: 'auto' },        // 👈 cho phép nở theo nội dung
        imgH: { xs: 130, sm: 150, md: 180 }
      };

  return (
    <>
      {/* Add structured data for SEO */}
      <ArticleSchema article={article} featured={featured} />

      <Card
        component="article" // Semantic HTML for better SEO
        sx={{
          width: sizes.cardW,
          height: sizes.cardH,
          bgcolor: '#1f2c39',
          border: '1px solid #40444b',
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            borderColor: '#00d4aa'
          }
        }}
      >
      <CardMedia
        component="img"
        image={article.imageUrl}
        alt={`${article.title} - Football247 News`} // More descriptive alt text for SEO
        sx={{
          height: sizes.imgH,
          objectFit: 'cover',
          transition: 'transform 0.3s ease-in-out',
          flexShrink: 0,
          '&:hover': { transform: 'scale(1.05)' }
        }}
      />

      <CardContent
        sx={{
          pt: '12px',
          pr: featured ? 3 : 2,
          pl: featured ? 3 : 2,

          // đặt pb theo responsive
          pb: { xs: '16px', sm: '16px', md: '16px' },

          // QUAN TRỌNG: override rule mặc định :last-child của MUI
          '&:last-child': {
            pb: { xs: '16px', sm: '16px', md: '16px' },
          },

          bgcolor: '#1f2c39',
          color: 'white',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 0,
        }}
      >
        {/* Bọc phần trên và để grow */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Author & Time */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, md: 2 },
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              pb: 1,
              mb: '12px',
              borderBottom: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <Typography
              component="span"
              variant="caption"
              sx={{ color: '#E8E8E8', fontSize: '0.8rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              By {article.author}
            </Typography>
            <Typography
              component="time"
              variant="caption"
              dateTime={formatDateForDateTime(article.publishedAtRaw)}
              sx={{ color: '#E8E8E8', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
            >
              {article.publishedAt}
            </Typography>
          </Box>

          {/* Title with proper semantic heading */}
          <Typography
            component={featured ? "h1" : "h2"} // Proper heading hierarchy for SEO
            variant={featured ? 'h5' : 'h6'}
            sx={{
              color: '#FFFFFF',
              fontWeight: 700,
              mb: '5px',
              fontSize: featured
                ? { xs: '1.2rem', sm: '1.1rem', md: '1rem', lg: '1rem' }
                : { xs: '1rem', sm: '1rem', md: '1rem', lg: '1rem' },
              lineHeight: 1.3,
              whiteSpace: 'normal',
              overflow: 'visible',
              wordBreak: 'break-word'
            }}
          >
            {article.title}
          </Typography>

          {/* Description with semantic paragraph */}
          <Typography
            component="p" // Semantic paragraph for better SEO
            variant="body2"
            sx={{
              color: '#FFFFFF',
              mb: 2,
              fontSize: featured ? '0.95rem' : '0.875rem',
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: featured ? 3 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {article.description}
          </Typography>
        </Box>

        {/* Tag & Comment — Luôn nằm dưới */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 'auto' // đẩy xuống đáy
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {article.tags.slice(0, featured ? 3 : 2).map((tag, index) => (
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
                    borderColor: '#00d4aa'
                  }
                }}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <ChatBubbleOutline sx={{ fontSize: 16, color: '#00d4aa' }} />
            <Typography variant="caption" sx={{ color: '#00d4aa', fontSize: '0.7rem', fontWeight: 600 }}>
              {article.commentCount}
            </Typography>
          </Box>
        </Box>
      </CardContent>

    </Card>
    </>
  );
};

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
  const featuredArticle =
    articles.find(a => a.priority === 1) ?? articles[0];
  const remainder = featuredArticle
    ? articles.filter(a => a.id !== featuredArticle.id)
    : articles;
  const gridArticles = remainder.slice(0, 4);
  const listArticles = remainder.slice(4);

  if (!articles || articles.length === 0) {
    return (
      <Box sx={{ width: '100%', mt: 0, mb: 4 }}>
        <Typography color="white" variant="body1">
          Chưa có bài viết để hiển thị.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', mt: 0, mb: 4 }}>
      {featuredArticle && (
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-start' }}>
          <ArticleCard article={featuredArticle} featured />
        </Box>
      )}

      {gridArticles.length > 0 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 2,
            maxWidth: { md: '680px' },
            mb: 4
          }}
        >
          {gridArticles.map(a => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </Box>
      )}

      <Box
        sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 4 }}
      >
        <AdBanner
          title="Football247 Premium"
          subtitle="Get exclusive access to live stats, match analysis, and breaking news from the Premier League"
          ctaText="Subscribe Now"
          onCtaClick={() => console.log('Advertisement clicked')}
        />
      </Box>

      <Box sx={{ width: '100%', mb: 4 }}>
        <PremierLeagueRankings />
      </Box>

      {listArticles.length > 0 && (
        <Box sx={{ width: '100%', maxWidth: { md: '680px' }, mb: 4 }}>
          {listArticles.map(a => (
            <HorizontalArticleCard key={a.id} article={a} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ArticleGrid;
