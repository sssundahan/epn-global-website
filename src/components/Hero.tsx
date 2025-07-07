
import React from 'react';
import { CardMedia, Typography, Box } from '@mui/material';

interface HeroProps {
  heroVideo?: string;
  heroTitle?: string;
}

const Hero: React.FC<HeroProps> = ({ heroVideo, heroTitle }) => {
  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
      {heroVideo && (
        <CardMedia
          component="video"
          autoPlay
          loop
          muted
          src={heroVideo}
          sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          {heroTitle || 'Connect. Elevate. Give Back.'}
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
