
import React from 'react';
import { Box, TextField, Typography, Button, Avatar } from '@mui/material';

const SelectParking = () => {
  return (
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
        <Typography variant="h5" sx={{ mb: 4 }}>
          Where are you headed to?
        </Typography>
        <TextField
          label="Renting time"
          fullWidth
          margin="normal"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                x 21 currency
              </Typography>
            ),
          }}
        />
        <TextField
          label="Your destination"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Box sx={{ width: '100%', mt: 2 }}>
          {/* Display parking options here */}
          <Box sx={{ height: 50, bgcolor: '#fff', mb: 1, borderRadius: 1 }} />
          <Box sx={{ height: 50, bgcolor: '#fff', mb: 1, borderRadius: 1 }} />
          <Box sx={{ height: 50, bgcolor: '#fff', mb: 1, borderRadius: 1 }} />
        </Box>
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ my: 2 }}
        >
          Select parking
        </Button>
      </Box>
    </Box>
  );
};

export default SelectParking;
