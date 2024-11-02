
import React, { useState } from 'react';
import { Box, Typography, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';

const ShareParkingMenu = () => {
  const [status, setStatus] = useState('active');

  const handleStatusChange = (event, newStatus) => {
    if (newStatus !== null) {
      setStatus(newStatus);
    }
  };
  const parkingLocations = [
    { address: "Strada Margeanului 23, Bucharest", parkingNumber: "Parking #16" },
    { address: "Calea Victoriei 89, Bucharest", parkingNumber: "Parking #82" },
    { address: "Calea Bucuresti, Bucharest", parkingNumber: "Parking #47" },
    { address: "Valea Ialomitei 6, Bucharest", parkingNumber: "Parking #28" },
    { address: "Strada Moinesti 36, Bucharest", parkingNumber: "Parking #37" },
  ];

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
      <Typography variant="h4" sx={{ mb: 4, mt:10 }}>
        Your registered parking lots
      </Typography>
      <ToggleButtonGroup
        value={status}
        exclusive
        onChange={handleStatusChange}
        sx={{
            bgcolor: 'white',
            borderColor: 'primary.main',
            borderRadius: '10px',
          }}
      >
        <ToggleButton value="active" sx={{ width: 100 }} color="success">
          Active
        </ToggleButton>
        <ToggleButton value="inactive" sx={{ width: 100 }}>
          Inactive
        </ToggleButton>
      </ToggleButtonGroup>
      <Box sx={{ width: '100%', mt: 10 }}>
                {parkingLocations.map((location, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    sx={{
                      width: '100%',
                      height: 50,
                      bgcolor: '#fff',
                      color: 'black',
                      mb: 1,
                      borderRadius: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      padding: 1,
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {location.address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {location.parkingNumber}
                    </Typography>
                  </Button>
                ))}
              </Box>
    </Box>
    </Box>
  );
};

export default ShareParkingMenu;
