
import React from 'react';
import { Box, TextField, Typography, Button, Switch, Avatar } from '@mui/material';

const RegisterParking = () => {
    
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
        padding: 3,
      }}
    >
      <Avatar sx={{ width: 100, height: 100, bgcolor: '#ccc', mb: 4 }} />
      <Box sx={{ width: '80%', maxWidth: 300 }}>
        <TextField
          label="Address of parking space"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Verification (Upload proof of ownership)"
          fullWidth
          margin="normal"
          variant="outlined"
          
        />
        <TextField
          label="Observations"
          multiline
          rows={3}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Base Price"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{ mt: 2 }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Typography variant="body2" color="textSecondary">
            Dynamic prices?
          </Typography>
          <Switch sx={{ ml: 1 }} color="success" />
        </Box>
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ my: 2 }}
        >
          Register parking lot
        </Button>
      </Box>
    </Box>
    </Box>
  );
};

export default RegisterParking;
