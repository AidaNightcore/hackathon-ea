
import React from 'react';
import { Box, Typography, Button, TextField, Avatar } from '@mui/material';

const SignUpPage = ({ onLogin }) => {
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
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Phone number"
          fullWidth
          margin="normal"
          variant="outlined"
        />
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
  );
};

export default SignUpPage;
