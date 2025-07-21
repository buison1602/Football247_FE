import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  time: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, title, description, author, time }) => (
  <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <CardMedia
      component="img"
      height="300"
      image={image}
      alt={title}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent>
      <Box display="flex" alignItems="center" mb={1}>
        <Typography variant="body2" color="text.secondary" mr={2}>{author}</Typography>
        <Typography variant="body2" color="text.secondary">{time}</Typography>
      </Box>
      <Typography variant="h6" fontWeight={700} gutterBottom>{title}</Typography>
      <Typography variant="body2" color="text.secondary">{description}</Typography>
    </CardContent>
  </Card>
);

export default NewsCard;
