
'use client';

import React from 'react';
import { Button, Card, CardContent, TextField, Typography, Box, useTheme } from '@mui/material';

const StyleGuide = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Style Guide
      </Typography>

      <Typography variant="h4" gutterBottom>Buttons</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <Button variant="contained" color="primary">Primary Button</Button>
        <Button variant="outlined" color="primary">Primary Outlined</Button>
        <Button variant="contained" color="secondary">Secondary Button</Button>
        <Button variant="outlined" color="secondary">Secondary Outlined</Button>
      </Box>

      <Typography variant="h4" gutterBottom>Cards</Typography>
      <Card sx={{ maxWidth: 300, mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography color="text.secondary">
            Card Subtitle
          </Typography>
          <Typography variant="body2">
            This is a sample card content.
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h4" gutterBottom>Form Fields</Typography>
      <Box sx={{ mb: 4 }}>
        <TextField label="Standard" variant="standard" fullWidth sx={{ mb: 2 }} />
        <TextField label="Filled" variant="filled" fullWidth sx={{ mb: 2 }} />
        <TextField label="Outlined" variant="outlined" fullWidth />
      </Box>

      <Typography variant="h4" gutterBottom>Colors</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <Box sx={{ width: 50, height: 50, bgcolor: theme.palette.primary.main, border: '1px solid #ccc' }} />
        <Box sx={{ width: 50, height: 50, bgcolor: theme.palette.secondary.main, border: '1px solid #ccc' }} />
        <Box sx={{ width: 50, height: 50, bgcolor: theme.palette.error.main, border: '1px solid #ccc' }} />
        <Box sx={{ width: 50, height: 50, bgcolor: theme.palette.background.default, border: '1px solid #ccc' }} />
      </Box>

      <Typography variant="h4" gutterBottom>Typography Scale</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body1">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
      <Typography variant="body2">Body 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="caption">Caption text</Typography>
      <Typography variant="overline">OVERLINE TEXT</Typography>
    </Box>
  );
};

export default StyleGuide;
