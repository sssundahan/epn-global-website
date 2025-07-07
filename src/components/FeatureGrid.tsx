
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      {features.map((feature) => (
        <Grid item xs={12} md={4} key={feature.title}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {feature.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeatureGrid;
