
import React from 'react';
import { Box, Typography, Button, TextField, Avatar } from '@mui/material';

const SignInPage = ({ onLogin, onSignUp }) => {
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
      <Avatar sx={{ width: 100, height: 100, bgcolor: '#ccc', mb: 4 }} />
      <Box sx={{ width: '80%', maxWidth: 300 }}>
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
          onClick={onLogin}
          fullWidth
          sx={{ mb: 2 }}
        >
          Log in
        </Button>
        <Button
          variant="text"
          color="inherit"
          onClick={onSignUp}
          fullWidth
          sx={{ textTransform: 'none' }}
        >
          Don’t have an account? Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default SignInPage;
