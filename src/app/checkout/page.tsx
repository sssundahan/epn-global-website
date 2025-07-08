
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPN Global - Checkout',
  description: 'Securely complete your purchase with Stripe Checkout.',
};

const CheckoutPage = () => {
  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Checkout
      </Typography>
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
        <Typography variant="body1">Checkout functionality is currently unavailable.</Typography>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
