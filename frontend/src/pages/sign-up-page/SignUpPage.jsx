
import React from 'react';
import { Box, Typography, Button, TextField, Avatar } from '@mui/material';

const SignUpPage = ({ onLogin }) => {
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
      <Avatar sx={{ width: 200, height: 200, bgcolor: '#ccc', mb: 4, mt:10 }} />
      <Box sx={{ width: '100%', maxWidth: 300 }}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{
            bgcolor: 'white', 
            borderColor: 'primary.main',
            borderRadius: '10px'
        }}
        />
        <TextField
          label="Phone number"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{
            bgcolor: 'white', 
            borderColor: 'primary.main',
            borderRadius: '10px'
        }}
        />
        <TextField
          label="Email Address"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{
            bgcolor: 'white', 
            borderColor: 'primary.main',
            borderRadius: '10px'
        }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{
            bgcolor: 'white', 
            borderColor: 'primary.main',
            borderRadius: '10px'
        }}
        />
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ my: 2 }}
        >
          Create account
        </Button>
        <Button
          variant="text"
          color="inherit"
          onClick={onLogin}
          fullWidth
          sx={{ textTransform: 'none' }}
        >
          Already have an account? Log in
        </Button>
      </Box>
    </Box>
    </Box>
  );
};

export default SignUpPage;
