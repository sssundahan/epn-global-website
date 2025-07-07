
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Box } from '@mui/material';

const EventCalendar = () => {
  return (
    <Box sx={{ m: 2 }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: 'Event 1', date: '2025-07-15' },
          { title: 'Event 2', date: '2025-07-20' }
        ]}
      />
    </Box>
  );
};

export default EventCalendar;
