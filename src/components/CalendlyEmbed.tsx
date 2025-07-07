
import React from 'react';
import { Box } from '@mui/material';

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
  return (
    <Box sx={{ width: '100%', height: 700 }}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Calendly Embed"
      ></iframe>
    </Box>
  );
};

export default CalendlyEmbed;
