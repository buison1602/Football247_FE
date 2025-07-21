import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

interface Team {
  name: string;
  logo: string;
}

interface Fixture {
  id: string;
  date: string;
  time: string;
  homeTeam: Team;
  awayTeam: Team;
}

interface FixturesTableProps {
  onViewFullFixtures?: () => void;
}

// Sample fixtures data with reliable placeholder logos
const fixturesData: Fixture[] = [
  {
    id: '1',
    date: 'Saturday 16th August',
    time: '02:00',
    homeTeam: {
      name: 'Liverpool',
      logo: 'https://via.placeholder.com/24x24/dc143c/ffffff?text=LIV'
    },
    awayTeam: {
      name: 'AFC Bournemouth',
      logo: 'https://via.placeholder.com/24x24/da020e/ffffff?text=BOU'
    }
  },
  {
    id: '2',
    date: 'Saturday 16th August',
    time: '18:30',
    homeTeam: {
      name: 'Aston Villa',
      logo: 'https://via.placeholder.com/24x24/95bfe5/7a003c?text=AVL'
    },
    awayTeam: {
      name: 'Newcastle United',
      logo: 'https://via.placeholder.com/24x24/241f20/ffffff?text=NEW'
    }
  },
  {
    id: '3',
    date: 'Saturday 16th August',
    time: '21:00',
    homeTeam: {
      name: 'Sunderland',
      logo: 'https://via.placeholder.com/24x24/eb172b/ffffff?text=SUN'
    },
    awayTeam: {
      name: 'West Ham United',
      logo: 'https://via.placeholder.com/24x24/7a263a/f3d459?text=WHU'
    }
  },
  {
    id: '4',
    date: 'Saturday 16th August',
    time: '21:00',
    homeTeam: {
      name: 'Brighton & Hove Albion',
      logo: 'https://via.placeholder.com/24x24/0057b8/ffcd00?text=BHA'
    },
    awayTeam: {
      name: 'Fulham',
      logo: 'https://via.placeholder.com/24x24/000000/ffffff?text=FUL'
    }
  },
  {
    id: '5',
    date: 'Saturday 16th August',
    time: '21:00',
    homeTeam: {
      name: 'Tottenham Hotspur',
      logo: 'https://via.placeholder.com/24x24/132257/ffffff?text=TOT'
    },
    awayTeam: {
      name: 'Burnley',
      logo: 'https://via.placeholder.com/24x24/6c1d45/99d6ea?text=BUR'
    }
  }
];

const FixturesTable: React.FC<FixturesTableProps> = ({
  onViewFullFixtures = () => console.log('View Full Fixtures clicked')
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

      {/* Date Header */}
      <Box
        sx={{
          bgcolor: '#2a3441',
          px: 2,
          py: 1,
          borderBottom: '1px solid #40444b'
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.85rem'
          }}
        >
          Saturday 16th August
        </Typography>
      </Box>

      {/* Fixtures List */}
      <Box sx={{ p: 0 }}>
        {fixturesData.map((fixture, index) => (
          <Box
            key={fixture.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2,
              borderBottom: index < fixturesData.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                cursor: 'pointer'
              },
              transition: 'background-color 0.2s ease-in-out'
            }}
          >
            {/* Time */}
            <Box
              sx={{
                minWidth: '45px',
                mr: 2
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '0.85rem'
                }}
              >
                {fixture.time}
              </Typography>
            </Box>

            {/* Teams */}
            <Box sx={{ flex: 1 }}>
              {/* Home Team */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 0.5
                }}
              >
                <Box
                  component="img"
                  src={fixture.homeTeam.logo}
                  alt={fixture.homeTeam.name}
                  sx={{
                    width: 24,
                    height: 24,
                    mr: 1,
                    objectFit: 'contain'
                  }}
                  onError={(e: any) => {
                    // Fallback to a default football placeholder if logo fails to load
                    e.target.src = 'https://via.placeholder.com/24x24/00d4aa/ffffff?text=⚽';
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: 400
                  }}
                >
                  {fixture.homeTeam.name}
                </Typography>
              </Box>

              {/* Away Team */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Box
                  component="img"
                  src={fixture.awayTeam.logo}
                  alt={fixture.awayTeam.name}
                  sx={{
                    width: 24,
                    height: 24,
                    mr: 1,
                    objectFit: 'contain'
                  }}
                  onError={(e: any) => {
                    // Fallback to a default football placeholder if logo fails to load
                    e.target.src = 'https://via.placeholder.com/24x24/00d4aa/ffffff?text=⚽';
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: 400
                  }}
                >
                  {fixture.awayTeam.name}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* View Full Fixtures Button */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid #40444b',
          bgcolor: '#161e26'
        }}
      >
        <Typography
          variant="body2"
          onClick={onViewFullFixtures}
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
          View Full Fixtures
        </Typography>
      </Box>
    </Box>
  );
};

export default FixturesTable;
