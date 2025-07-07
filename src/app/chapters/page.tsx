
import React from 'react';
import { Typography, Container } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPN Global - Chapters',
  description: 'Find and connect with local EPN Global chapters.',
};

const ChaptersPage = () => {
  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Chapters
      </Typography>
      <Typography variant="body1">
        Connect with members in your local area through our global network of chapters.
      </Typography>
    </Container>
  );
};

export default ChaptersPage;
