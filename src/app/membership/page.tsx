
import React from 'react';
import { Typography, Container } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPN Global - Membership',
  description: 'Explore membership options and benefits at EPN Global.',
};

const MembershipPage = () => {
  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Membership
      </Typography>
      <Typography variant="body1">
        Join a global network of leaders and unlock your full potential. Our membership provides access to exclusive events, content, and a vibrant community.
      </Typography>
    </Container>
  );
};

export default MembershipPage;
