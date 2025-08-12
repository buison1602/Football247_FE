import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  AccessTime,
  ChatBubbleOutline,
  Person
} from '@mui/icons-material';
import AdBanner from './AdBanner';
import PremierLeagueRankings from './PremierLeagueRankings';
import HorizontalArticleCard from './HorizontalArticleCard';
import { horizontalArticles } from '../../data/sampleArticles';

export interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  publishedAt: string;
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

  // Calculate dimensions based on requirements
  const cardDimensions = featured
    ? {
        width: isMobile ? '100%' : '680px',
        height: isMobile ? 'auto' : '580px',
        imageHeight: isMobile ? 200 : 320
      }
    : {
        width: isMobile ? '100%' : '330px',
        height: isMobile ? 'auto' : '408px',
        imageHeight: isMobile ? 150 : 220
      };

  return (
    <Card
      sx={{
        width: cardDimensions.width,
        height: cardDimensions.height,
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
      {/* Article Image */}
      <CardMedia
        component="img"
        height={cardDimensions.imageHeight}
        image={article.imageUrl}
        alt={article.title}
        sx={{
          objectFit: 'cover',
          transition: 'transform 0.3s ease-in-out',
          flexShrink: 0,
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
      />

      <CardContent
        sx={{
          p: featured ? 3 : 2,
          bgcolor: '#1f2c39',
          color: 'white',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 0 // Ensure proper flex behavior
        }}
      >
        {/* Content Top Section */}
        <Box sx={{ flex: 1 }}>
          {/* Tags */}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              mb: 2,
              flexWrap: 'wrap'
            }}
          >
            {article.tags.slice(0, featured ? 3 : 2).map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  bgcolor: 'rgba(0, 212, 170, 0.2)',
                  color: '#00d4aa',
                  border: '1px solid rgba(0, 212, 170, 0.3)',
                  fontSize: '0.7rem',
                  height: 24,
                  '&:hover': {
                    bgcolor: 'rgba(0, 212, 170, 0.3)'
                  }
                }}
              />
            ))}
          </Box>

          {/* Title */}
          <Typography
            variant={featured ? 'h5' : 'h6'}
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 2,
              fontSize: featured
                ? { xs: '1.3rem', md: '1.5rem' }
                : { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: featured ? 2 : 2,
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
              mb: 2,
              fontSize: featured ? '0.95rem' : '0.85rem',
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

        {/* Meta Information - Always at bottom */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 2,
            mt: 'auto', // Push to bottom
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            flexShrink: 0 // Prevent shrinking
          }}
        >
          {/* Left side - Author and Time */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, md: 2 },
              flex: 1,
              flexWrap: { xs: 'wrap', md: 'nowrap' }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                minWidth: 0 // Allow text truncation
              }}
            >
              <Person sx={{ fontSize: 16, color: 'rgba(255, 255, 255, 0.6)', flexShrink: 0 }} />
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.7rem',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {article.author}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                minWidth: 0 // Allow text truncation
              }}
            >
              <AccessTime sx={{ fontSize: 16, color: 'rgba(255, 255, 255, 0.6)', flexShrink: 0 }} />
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.7rem',
                  whiteSpace: 'nowrap'
                }}
              >
                {article.publishedAt}
              </Typography>
            </Box>
          </Box>

          {/* Right side - Comments */}
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

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Separate featured article (priority 1) from regular articles
  const featuredArticle = articles.find(article => article.priority === 1);
  // Filter regular articles to show only first 4
  const regularArticles = articles.filter(article => article.priority !== 1).slice(0, 4);

  return (
    <Box
      sx={{
        width: '100%',
        mt: 3,
        mb: 4
      }}
    >
      {/* Featured Article - 680px × 580px */}
      {featuredArticle && (
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-start' }}>
          <ArticleCard article={featuredArticle} featured={true} />
        </Box>
      )}

      {/* Regular Articles Grid - 2 articles per row, each 330px × 408px */}
      {regularArticles.length > 0 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 330px)'
            },
            gap: { xs: 2, md: 2 },
            justifyContent: { xs: 'center', md: 'flex-start' },
            width: '100%',
            maxWidth: { md: '680px' }, // Ensure it fits within the articles section
            mb: 4
          }}
        >
          {regularArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Box>
      )}

      {/* Advertisement Banner Section - 640px × 260px */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          mb: 4
        }}
      >
        <AdBanner
          title="Football247 Premium"
          subtitle="Get exclusive access to live stats, match analysis, and breaking news from the Premier League"
          ctaText="Subscribe Now"
          onCtaClick={() => console.log('Advertisement clicked')}
        />
      </Box>

      {/* Premier League Stats & Rankings Section */}
      <Box
        sx={{
          width: '100%',
          mb: 4
        }}
      >
        <PremierLeagueRankings />
      </Box>

      {/* Additional Articles List Section */}
      <Box
        sx={{
          width: '100%',
          maxWidth: { md: '680px' },
          mb: 4
        }}
      >
        {horizontalArticles.map((article) => (
          <HorizontalArticleCard key={article.id} article={article} />
        ))}
      </Box>
    </Box>
  );
};

export default ArticleGrid;
