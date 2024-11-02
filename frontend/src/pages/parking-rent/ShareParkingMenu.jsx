
import React, { useState } from 'react';
import { Box, Typography, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';

const ShareParkingMenu = () => {
  const [status, setStatus] = useState('active');

  const handleStatusChange = (event, newStatus) => {
    if (newStatus !== null) {
      setStatus(newStatus);
    }
  };

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
      <Typography variant="h5" sx={{ mb: 4 }}>
        Your registered parking lots
      </Typography>
      <ToggleButtonGroup
        value={status}
        exclusive
        onChange={handleStatusChange}
        sx={{ mb: 3 }}
      >
        <ToggleButton value="active" sx={{ width: 100 }} color="success">
          Active
        </ToggleButton>
        <ToggleButton value="inactive" sx={{ width: 100 }}>
          Inactive
        </ToggleButton>
      </ToggleButtonGroup>
      <Box sx={{ width: '100%', maxWidth: 300, mb: 2 }}>
        {/* Display parking slots here */}
        <Box sx={{ height: 50, bgcolor: '#fff', mb: 1, borderRadius: 1 }} />
        <Box sx={{ height: 50, bgcolor: '#fff', mb: 1, borderRadius: 1 }} />
        <Box sx={{ height: 50, bgcolor: '#fff', mb: 1, borderRadius: 1 }} />
      </Box>
      <Button variant="contained" color="success" fullWidth>
        Register a new space?
      </Button>
    </Box>
  );
};

export default ShareParkingMenu;
