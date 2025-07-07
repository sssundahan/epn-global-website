
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EPN Global
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Membership</Button>
        <Button color="inherit">Events</Button>
        <Button color="inherit">Content</Button>
        <Button color="inherit">Chapters</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
