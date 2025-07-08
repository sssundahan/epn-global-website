import React from 'react';
import { Grid, Typography } from '@mui/material';

const TestGrid = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography>Test Grid Item</Typography>
    </Grid>
  </Grid>
);

export default TestGrid; 