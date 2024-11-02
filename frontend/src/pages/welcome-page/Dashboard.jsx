// src/components/Dashboard.jsx

import React from 'react';
import { Box, Typography, Avatar, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #673AB7, #512DA8)'
      }}
    >
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
      <Grid container spacing={2} sx={{ maxWidth: 300, mt: 10, mb:10 }}>
        <Avatar sx={{ bgcolor: '#ccc', width: 60, height: 60, mb: 2 }} />
        <Typography variant="h6" sx={{ml: 2, mt: 2}}>Welcome, Name</Typography>
      </Grid>
      <Typography variant="h3" sx={{ mb: 10 }}>
        What do you want to do today?
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: 350 }}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => navigate('/')}
            sx={{ width: '100%', height: 120, borderRadius: 5 }} 
          >
            Share a ride
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => navigate('/')}
            sx={{ width: '100%', height: 120,borderRadius: 5 }} 
          >
            Get a ride
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => navigate('/parking-book')}
            sx={{ width: '100%', height: 120, borderRadius: 5 }} 
          >
            Book a parking space
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => navigate('/parking-rent')}

            sx={{ width: '100%', height: 120, borderRadius: 5 }} 
          >
            Rent a parking space
          </Button>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default Dashboard;
