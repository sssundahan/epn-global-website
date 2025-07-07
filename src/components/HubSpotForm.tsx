
import React from 'react';
import { Box } from '@mui/material';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({ portalId, formId }) => {
  return (
    <Box sx={{ width: '100%', height: 600 }}>
      <iframe
        src={`https://app.hubspot.com/forms/${portalId}/${formId}`}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        title="HubSpot Form"
      ></iframe>
    </Box>
  );
};

export default HubSpotForm;
