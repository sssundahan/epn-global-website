
import React from 'react';
import { Container, Typography } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPN Global - Contact Us',
  description: 'Get in touch with the EPN Global team for inquiries and support.',
};

const ContactPage = () => {
  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Get in touch with the EPN Global team.
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Send us a message
      </Typography>
      <Typography variant="body1">Contact form is currently unavailable.</Typography>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
        Schedule a meeting
      </Typography>
      <Typography variant="body1">Meeting scheduling is currently unavailable.</Typography>
    </Container>
  );
};

export default ContactPage;
