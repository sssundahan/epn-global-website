
import React from 'react';
import { Typography, Container } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About EPN Global',
  description: 'Learn more about EPN Global, our mission, and our values.',
};

const AboutPage = () => {
  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        About EPN Global
      </Typography>
      <Typography variant="body1">
        EPN Global is the premier network for executives, dedicated to connecting leaders, fostering growth, and enabling members to give back to their communities.
      </Typography>
    </Container>
  );
};

export default AboutPage;
