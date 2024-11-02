// src/components/Dashboard.jsx

import React from 'react';
import { Box, Typography, Avatar, Grid, Button } from '@mui/material';

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Avatar sx={{ bgcolor: '#ccc', width: 60, height: 60, mb: 2 }} />
        <Typography variant="h6">Welcome, Name</Typography>
      </Box>
      <Typography variant="h5" sx={{ mb: 4 }}>
        What do you want to do today?
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: 300 }}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ width: '100%', height: 100 }} 
          >
            Share a ride
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ width: '100%', height: 100 }} 
          >
            Get a ride
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ width: '100%', height: 100 }} 
          >
            Book a parking space
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ width: '100%', height: 100 }} 
          >
            Rent a parking space
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
