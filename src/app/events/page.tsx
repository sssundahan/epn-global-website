
import React from 'react';
import { Typography, Container } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPN Global - Events',
  description: 'Discover upcoming events and networking opportunities at EPN Global.',
};

const EventsPage = () => {
  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Events
      </Typography>
      <Typography variant="body1">
        From intimate roundtables to global summits, our events provide unparalleled opportunities for learning and networking.
      </Typography>
    </Container>
  );
};

export default EventsPage;
