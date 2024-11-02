import React, { useState, useEffect } from 'react';
import { Box,Avatar ,CircularProgress,Grid, Typography } from '@mui/material';

const LoadingPassengers = () => {
  const [showDriverInfo, setShowDriverInfo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timer triggered"); 
      setShowDriverInfo(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(to bottom, #673AB7, #512DA8)',
      }}
    >
      {!showDriverInfo ? (
        <>
          <CircularProgress size={120} sx={{ color: 'white' }} />
          <Typography variant="h6" sx={{ marginTop: 2, textAlign: 'center', color: 'white' }}>
            We are searching for a client that suits your demand.
          </Typography>
        </>
      ) : (
        
        <Box
          sx={{
            marginTop: 4,
            padding: 2,
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 3,
            textAlign: 'center',
            width: '80%',
          }}
        >
         <Grid container spacing={2} sx={{ maxWidth: 300, mt: 10, mb: 5, ml: 5 }}>
          <Avatar sx={{ bgcolor: '#ccc', width: 60, height: 60, mb: 2 }} />
          <Typography variant="h6" sx={{ ml: 2, mt: 2 }}>
            Mircea Gheorghe
          </Typography>
        </Grid>
          <Typography variant="h5" color="textSecondary">
          The client is at the location.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default LoadingPassengers;
