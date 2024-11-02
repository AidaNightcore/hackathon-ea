import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();

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
      <Typography variant="h4" sx={{ mb: 1 , mt:20}}>
        ParkCheap GoSplit
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Let’s start
      </Typography>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          bgcolor: '#ccc',
          mb: 4,
        }}
      />
      <Button
        variant="contained"
        color="success"
        onClick={() => navigate('/sign-in')}
        sx={{
          mb: 2,
          px: 5,
          fontSize: 20,
          width: 230,
          borderRadius: 5
        }}
      >
        Log in
      </Button>
      <Typography variant="h6">
      Don’t have an account?{' '}
        <Button
          variant="text"
         color="success"
          sx={{ textTransform: 'none', fontSize: 20 }}
          onClick={() => navigate('/sign-up')}
        >
        Sign up
        </Button>
      </Typography>
    </Box>
  );
};

export default LoginScreen;
