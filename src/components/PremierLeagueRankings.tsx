import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery,
  Avatar
} from '@mui/material';
import { EmojiEvents, TrendingUp } from '@mui/icons-material';

interface TeamData {
  position: number;
  name: string;
  points: number;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalDifference: number;
}

// Arsenal logo URL - using a reliable source
const ARSENAL_LOGO_URL = 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg';

const premierLeagueData: TeamData[] = [
  {
    position: 1,
    name: 'Arsenal',
    points: 84,
    gamesPlayed: 38,
    wins: 26,
    draws: 6,
    losses: 6,
    goalDifference: 62
  },
  {
    position: 2,
    name: 'Manchester City',
    points: 82,
    gamesPlayed: 38,
    wins: 25,
    draws: 7,
    losses: 6,
    goalDifference: 58
  },
  {
    position: 3,
    name: 'Liverpool',
    points: 78,
    gamesPlayed: 38,
    wins: 23,
    draws: 9,
    losses: 6,
    goalDifference: 45
  },
  {
    position: 4,
    name: 'Chelsea',
    points: 71,
    gamesPlayed: 38,
    wins: 21,
    draws: 8,
    losses: 9,
    goalDifference: 31
  },
  {
    position: 5,
    name: 'Newcastle United',
    points: 69,
    gamesPlayed: 38,
    wins: 20,
    draws: 9,
    losses: 9,
    goalDifference: 28
  },
  {
    position: 6,
    name: 'Manchester United',
    points: 66,
    gamesPlayed: 38,
    wins: 19,
    draws: 9,
    losses: 10,
    goalDifference: 15
  },
  {
    position: 7,
    name: 'Tottenham',
    points: 64,
    gamesPlayed: 38,
    wins: 18,
    draws: 10,
    losses: 10,
    goalDifference: 12
  },
  {
    position: 8,
    name: 'Brighton',
    points: 58,
    gamesPlayed: 38,
    wins: 16,
    draws: 10,
    losses: 12,
    goalDifference: 8
  },
  {
    position: 9,
    name: 'West Ham',
    points: 52,
    gamesPlayed: 38,
    wins: 14,
    draws: 10,
    losses: 14,
    goalDifference: -2
  },
  {
    position: 10,
    name: 'Aston Villa',
    points: 50,
    gamesPlayed: 38,
    wins: 13,
    draws: 11,
    losses: 14,
    goalDifference: -8
  }
];

const PremierLeagueRankings: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '662px',
        mx: 'auto',
        my: 4
      }}
    >
      {/* Title Section - Outside the table */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 3,
          px: 1
        }}
      >
        <Box
          sx={{
            p: 1,
            borderRadius: 1,
            bgcolor: 'rgba(0, 212, 170, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <EmojiEvents sx={{ color: '#00d4aa', fontSize: 24 }} />
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '1.1rem', md: '1.25rem' }
          }}
        >
          Premier League Stats & Rankings
        </Typography>
        <TrendingUp sx={{ color: '#00d4aa', fontSize: 20, ml: 'auto' }} />
      </Box>

      {/* Table Container */}
      <Box
        sx={{
          bgcolor: '#1f2c39',
          borderRadius: 2,
          overflow: 'hidden',
          border: '1px solid #40444b',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            bgcolor: 'transparent',
            boxShadow: 'none'
          }}
        >
          <Table size={isMobile ? 'small' : 'medium'}>
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: 'rgba(0, 212, 170, 0.1)',
                  '& th': {
                    color: '#00d4aa',
                    fontWeight: 600,
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    borderBottom: '1px solid #40444b'
                  }
                }}
              >
                <TableCell align="center">#</TableCell>
                <TableCell>Team</TableCell>
                <TableCell align="center">P</TableCell>
                <TableCell align="center">W</TableCell>
                <TableCell align="center">D</TableCell>
                <TableCell align="center">L</TableCell>
                <TableCell align="center">GD</TableCell>
                <TableCell align="center">PTS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {premierLeagueData.map((team) => (
                <TableRow
                  key={team.position}
                  sx={{
                    '&:hover': {
                      bgcolor: 'rgba(0, 212, 170, 0.05)'
                    },
                    '& td': {
                      color: 'white',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }
                  }}
                >
                  <TableCell
                    align="center"
                    sx={{
                      color: team.position <= 4 ? '#00d4aa' : 'white',
                      fontWeight: team.position <= 4 ? 600 : 400
                    }}
                  >
                    {team.position}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <Avatar
                        src={ARSENAL_LOGO_URL}
                        alt="Arsenal Logo"
                        sx={{
                          width: 24,
                          height: 24,
                          bgcolor: 'transparent'
                        }}
                      >
                        AFC
                      </Avatar>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'white',
                          fontWeight: 500,
                          fontSize: { xs: '0.75rem', md: '0.875rem' }
                        }}
                      >
                        {team.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">{team.gamesPlayed}</TableCell>
                  <TableCell align="center">{team.wins}</TableCell>
                  <TableCell align="center">{team.draws}</TableCell>
                  <TableCell align="center">{team.losses}</TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: team.goalDifference > 0 ? '#00d4aa' : 
                             team.goalDifference < 0 ? '#ff6b6b' : 'white'
                    }}
                  >
                    {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: '#00d4aa',
                      fontWeight: 600
                    }}
                  >
                    {team.points}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Footer */}
        <Box
          sx={{
            p: 2,
            bgcolor: '#161e26',
            borderTop: '1px solid #40444b',
            textAlign: 'left'
          }}
        >
          <Typography
            variant="caption"
            component="button"
            onClick={() => console.log('View More clicked')}
            sx={{
              color: '#00d4aa',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
              textDecoration: 'none',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                color: '#00a37a',
                transform: 'translateX(2px)'
              },
              '&:focus': {
                outline: 'none',
                color: '#00a37a'
              }
            }}
          >
            View More &gt;
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PremierLeagueRankings;
