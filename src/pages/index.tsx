import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import MailboxCard from '../components/MailboxCard';
import MailboxAdBanner from '../components/MailboxAdBanner';
import MailboxAdBanner2 from '../components/MailboxAdBanner2';
import FixturesTable from '../components/FixturesTable';
import ResultsTable from '../components/ResultsTable';
import AuthDialog from '../components/AuthDialog';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ArticleGrid, { Article } from '../components/ArticleGrid';
import Footer from '../components/Footer';
import { sampleArticles } from '../../data/sampleArticles';
import { formatPublishedAt } from '../utils/date';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

interface ArticleDto {
  id: string;
  title: string;
  slug: string;
  description: string;
  priority: number;
  bgrImg: string;
  createdAt: string;
  tags: string[];
}

const mailboxData = [
  {
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80',
    title:
      'Prime Messi and Ronaldo would ‘turn poo’ at joke club Man Utd',
    time: '23 hours ago',
    comments: 25,
  },
  {
    image:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Man Utd transfers held up by ‘clusterf***’ of the past',
    time: '10 Jul 2025',
    comments: 54,
  },
  {
    image:
      'https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title:
      'Premier League title race heats up as Arsenal close gap on Liverpool',
    time: '18 hours ago',
    comments: 42,
  },
  {
    image:
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title:
      'Champions League quarter-finals draw: Real Madrid face Manchester City',
    time: '2 days ago',
    comments: 78,
  },
];

const HomePage = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [articles, setArticles] = useState<ArticleDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('https://localhost:7087/api/Article');
        if (!res.ok) throw new Error('Failed to fetch articles');
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.log('-----======---------======--------- LỖI: ', err);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const handleCategorySelect = (category: { id: string; name: string; slug: string }) => {
    setActiveCategory(category.slug);
    console.log('Selected category:', category);
  };

  const handleLoginClick = () => {
    setAuthMode('login');
    setOpenAuth(true);
  };

  const handleSignupClick = () => {
    setAuthMode('signup');
    setOpenAuth(true);
  };

  // Convert ArticleDto -> Article
  const convertedArticles: Article[] =
    articles.length > 0
      ? articles.map((a) => {
          const cover = Array.isArray(a.bgrImg) ? a.bgrImg[0] : a.bgrImg;
          return {
            id: a.id,
            title: a.title,
            description: a.description,
            imageUrl: cover || '/placeholder.jpg',
            tags: a.tags || [],
            publishedAt: formatPublishedAt(a.createdAt),
            author: a.tags?.[0] || 'Admin',
            commentCount: Math.floor(Math.random() * 50) + 1,
            priority: a.priority,
          };
        })
      : sampleArticles;

  return (
    <Box minHeight="100vh" bgcolor="#32363B">
      <Header
        onCategorySelect={handleCategorySelect}
        activeCategory={activeCategory}
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      <Banner />

      {/* Background Wrapper for Main Content */}
      <Box sx={{ py: { xs: 3, md: 4 } }}>
        {/* Main Content Container - 1080px width */}
        <Box
          sx={{
            width: { xs: '95%', md: '1080px' },
            mx: 'auto',
            display: 'flex',
            gap: { xs: 2, md: 3 },
            p: { xs: 2, md: 2 },
            flexDirection: { xs: 'column', md: 'row' },
            bgcolor: '#1E252C',
            borderRadius: 2,
          }}
        >
          {/* Articles Section - 680px width for featured + regular articles */}
          <Box sx={{ width: { xs: '100%', md: '680px' }, flexShrink: 0 }}>
            {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                  minHeight: '200px',
                  // keyframes cho bóng xoay và nhấp nháy nhẹ
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                  '@keyframes pulse': {
                    '0%': { opacity: 0.6 },
                    '50%': { opacity: 1 },
                    '100%': { opacity: 0.6 },
                  },
                }}
              >
                <SportsSoccerIcon
                  aria-label="loading"
                  sx={{
                    fontSize: 30,
                    color: '#00d4aa',
                    animation: 'spin 1s linear infinite, pulse 2s ease-in-out infinite',
                  }}
                />
                <Typography color="white" variant="h6">
                  Please wait, loading news...
                </Typography>
              </Box>
            ) : (
              <ArticleGrid articles={convertedArticles} />
            )}
          </Box>

          {/* Sidebar - Mailbox - 340px width */}
          <Box
            sx={{
              width: { xs: '100%', md: '340px' },
              flexShrink: 0,
              ml: { xs: 0, md: 'auto' },
            }}
          >
            <Typography variant="h6" color="white" mb={2}>
              Mailbox
            </Typography>
            {mailboxData.map((item, idx) => (
              <MailboxCard key={idx} {...item} />
            ))}

            {/* Advertisement Banner */}
            <MailboxAdBanner />

            {/* Fixtures Section */}
            <Typography variant="h6" color="white" mb={2}>
              Fixtures
            </Typography>
            <FixturesTable />

            {/* Second Advertisement Banner */}
            <MailboxAdBanner2 />

            {/* Results Section */}
            <Typography variant="h6" color="white" mb={2}>
              Results
            </Typography>
            <ResultsTable />

            {/* Additional Article Cards */}
            <MailboxCard
              image="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              title="Transfer News: PSG Eyes €120M Move for Premier League Star"
              time="2 hours ago"
              comments={15}
            />

            <MailboxCard
              image="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              title="Champions League Draw: English Clubs Face Tough European Tests"
              time="5 hours ago"
              comments={23}
            />

            <MailboxCard
              image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80"
              title="World Cup Qualifiers: Upsets and Surprises Rock International Football"
              time="8 hours ago"
              comments={8}
            />

            <MailboxCard
              image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              title="Injury Update: Key Players Set to Return Before Derby Match"
              time="12 hours ago"
              comments={31}
            />

            <MailboxCard
              image="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1993&q=80"
              title="Tactical Analysis: How Formation Changes Transformed Season"
              time="1 day ago"
              comments={12}
            />

            <MailboxCard
              image="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
              title="Youth Academy Success: Rising Stars Making First Team Impact"
              time="1 day ago"
              comments={19}
            />
          </Box>
        </Box>
      </Box>

      <AuthDialog
        open={openAuth}
        onClose={() => setOpenAuth(false)}
        initialMode={authMode}
      />

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default HomePage;
