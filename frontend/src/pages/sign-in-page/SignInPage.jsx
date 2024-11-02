
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, TextField, Avatar } from '@mui/material';


const SignInPage = ({ onLogin, onSignUp }) => {
  const navigate = useNavigate();

  return (
    <Box
    sx={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(to bottom, #673AB7, #512DA8)'
    }}>
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
      <Avatar sx={{ width: 150, height: 150, bgcolor: '#ccc', mb: 4, mt:10 }} />
      <Box sx={{ width: '80%', maxWidth: 300,  }}>
        <TextField
          label="Email Address"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ textAlign: 'right', mb: 2 }}
        >
          Forgot Password?
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate('/dashboard')}
          fullWidth
          sx={{ mb: 2 }}
        >
          Log in
        </Button>
        <Button
          variant="text"
          color="inherit"
          onClick={() => navigate('/sign-up')}
          fullWidth
          sx={{ textTransform: 'none' }}
        >
          Don’t have an account? Sign up
        </Button>
      </Box>
    </Box>
    </Box>
  );
};

export default SignInPage;
