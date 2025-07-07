
import React from 'react';
import { Typography, Container } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPN Global - Content',
  description: 'Access exclusive articles, reports, and videos from EPN Global.',
};

const ContentPage = () => {
  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Content
      </Typography>
      <Typography variant="body1">
        Explore our library of articles, reports, and videos, featuring insights from the world's leading executives.
      </Typography>
    </Container>
  );
};

export default ContentPage;
