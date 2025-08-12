import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

interface Team {
  name: string;
  logo: string;
  score: number;
}

interface Result {
  id: string;
  league: string;
  date: string;
  homeTeam: Team;
  awayTeam: Team;
}

interface ResultsTableProps {
  onViewFullResults?: () => void;
}

// Sample results data - Premier League only with individual dates
const resultsData: Result[] = [
  {
    id: '1',
    league: 'Premier League',
    date: '22/07',
    homeTeam: {
      name: 'Manchester City',
      logo: 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png',
      score: 3
    },
    awayTeam: {
      name: 'Arsenal',
      logo: 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png',
      score: 1
    }
  },
  {
    id: '2',
    league: 'Premier League',
    date: '16/11',
    homeTeam: {
      name: 'Chelsea',
      logo: 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png',
      score: 2
    },
    awayTeam: {
      name: 'Liverpool',
      logo: 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png',
      score: 2
    }
  },
  {
    id: '3',
    league: 'Premier League',
    date: '23/08',
    homeTeam: {
      name: 'Tottenham Hotspur',
      logo: 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png',
      score: 1
    },
    awayTeam: {
      name: 'West Ham United',
      logo: 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png',
      score: 0
    }
  },
  {
    id: '4',
    league: 'Premier League',
    date: '15/09',
    homeTeam: {
      name: 'Newcastle United',
      logo: 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png',
      score: 2
    },
    awayTeam: {
      name: 'Brighton & Hove Albion',
      logo: 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png',
      score: 1
    }
  },
  {
    id: '5',
    league: 'Premier League',
    date: '02/10',
    homeTeam: {
      name: 'Aston Villa',
      logo: 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png',
      score: 0
    },
    awayTeam: {
      name: 'Fulham',
      logo: 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png',
      score: 3
    }
  }
];

const ResultsTable: React.FC<ResultsTableProps> = ({
  onViewFullResults = () => console.log('View Full Results clicked')
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '340px',
        bgcolor: '#1f2c39',
        border: '1px solid #40444b',
        borderRadius: 2,
        overflow: 'hidden',
        mt: 2,
        mb: 4,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* League Header */}
      <Box
        sx={{
          bgcolor: '#161e26',
          px: 2,
          py: 1.5,
          borderBottom: '1px solid #40444b'
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#00d4aa',
            fontSize: '0.85rem',
            fontWeight: 600
          }}
        >
          Premier League Results
        </Typography>
      </Box>

      {/* Results List */}
      <Box sx={{ p: 0 }}>
        {resultsData.map((result, index) => (
          <Box
            key={result.id}
            sx={{
              borderBottom: index < resultsData.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                cursor: 'pointer'
              },
              transition: 'background-color 0.2s ease-in-out'
            }}
          >
            {/* Date Header for each match */}
            <Box
              sx={{
                px: 2,
                py: 0.5,
                bgcolor: 'rgba(255, 255, 255, 0.03)'
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.7rem',
                  fontWeight: 500
                }}
              >
                {result.date}
              </Typography>
            </Box>

            {/* Match Result */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                pt: 1.5
              }}
            >
              {/* Home Team */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1
                }}
              >
                <Box
                  component="img"
                  src={result.homeTeam.logo}
                  alt={result.homeTeam.name}
                  sx={{
                    width: 24,
                    height: 24,
                    mr: 1,
                    objectFit: 'contain'
                  }}
                  onError={(e: any) => {
                    e.target.src = 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png';
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    flex: 1
                  }}
                >
                  {result.homeTeam.name}
                </Typography>
              </Box>

              {/* Score */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mx: 2,
                  minWidth: '60px',
                  justifyContent: 'center'
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textAlign: 'center'
                  }}
                >
                  {result.homeTeam.score} - {result.awayTeam.score}
                </Typography>
              </Box>

              {/* Away Team */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1,
                  justifyContent: 'flex-end'
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    flex: 1,
                    textAlign: 'right'
                  }}
                >
                  {result.awayTeam.name}
                </Typography>
                <Box
                  component="img"
                  src={result.awayTeam.logo}
                  alt={result.awayTeam.name}
                  sx={{
                    width: 24,
                    height: 24,
                    ml: 1,
                    objectFit: 'contain'
                  }}
                  onError={(e: any) => {
                    e.target.src = 'https://images.seeklogo.com/logo-png/28/1/premier-league-new-logo-png_seeklogo-286461.png';
                  }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* View Full Results Button */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid #40444b',
          bgcolor: '#161e26'
        }}
      >
        <Typography
          variant="body2"
          onClick={onViewFullResults}
          sx={{
            color: '#00d4aa',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            textAlign: 'left',
            '&:hover': {
              color: '#00a37a',
              textDecoration: 'underline'
            },
            transition: 'all 0.2s ease-in-out'
          }}
        >
          View Full Results
        </Typography>
      </Box>
    </Box>
  );
};

export default ResultsTable;
