
import React from 'react';
import { Typography, Container } from '@mui/material';
import type { Metadata } from 'next';
import HubSpotForm from '../../components/HubSpotForm';
import CalendlyEmbed from '../../components/CalendlyEmbed';

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
      <HubSpotForm portalId="YOUR_HUBSPOT_PORTAL_ID" formId="YOUR_HUBSPOT_FORM_ID" />

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
        Schedule a meeting
      </Typography>
      <CalendlyEmbed url="YOUR_CALENDLY_EMBED_URL" />
    </Container>
  );
};

export default ContactPage;
