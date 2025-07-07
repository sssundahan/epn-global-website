
import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { useSession } from 'next-auth/react';

const ProfileCard = () => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ width: 56, height: 56, mb: 2 }}>
            {session.user?.name ? session.user.name[0] : 'U'}
          </Avatar>
          <Typography gutterBottom variant="h5" component="div">
            {session.user?.name || 'User'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {session.user?.email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
