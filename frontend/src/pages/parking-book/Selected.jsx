import React, { useState, useEffect } from 'react';
import { Box,Avatar ,CircularProgress,Grid, Typography } from '@mui/material';

const Selected = () => {
  

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
         
          <Typography variant="h5" color="textSecondary">
            The parking has been reserved!
          </Typography>
          
        </Box>
      
    </Box>
  
)};

export default Selected;
