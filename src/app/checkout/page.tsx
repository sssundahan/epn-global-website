
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Typography, Container, Box } from '@mui/material';
import CheckoutForm from '../../components/CheckoutForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPN Global - Checkout',
  description: 'Securely complete your purchase with Stripe Checkout.',
};

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const CheckoutPage = () => {
  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Checkout
      </Typography>
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
        {stripePromise && (
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </Box>
    </Container>
  );
};

export default CheckoutPage;
