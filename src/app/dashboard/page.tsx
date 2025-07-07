
'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { Typography, Container, CircularProgress, Box } from '@mui/material';
import ProfileCard from '../../components/ProfileCard';
import DirectoryTable from '../../components/DirectoryTable';
import EventCalendar from '../../components/EventCalendar';

const DashboardPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <Container sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Access Denied
        </Typography>
        <Typography variant="body1">
          Please sign in to view this page.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome, {session?.user?.name}!
      </Typography>
      <ProfileCard />
      <DirectoryTable />
      <EventCalendar />
    </Container>
  );
};

export default DashboardPage;
