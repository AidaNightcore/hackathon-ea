import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Avatar, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const SelectParking = () => {
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const parkingLocations = [
    { address: "Strada Lipscani 25, Bucharest", parkingNumber: "Parking #101" },
    { address: "Calea Victoriei 12, Bucharest", parkingNumber: "Parking #22" },
    { address: "Blvd. Unirii 18, Bucharest", parkingNumber: "Parking #17" },
  ];

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
    setLoading(true); // Show loading indicator

    // Set loading to false after 1 second
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #673AB7, #512DA8)',
      }}
    >
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
        <Avatar sx={{ width: 150, height: 150, bgcolor: '#ccc', mb: 4, mt: 10 }} />
        <Box sx={{ width: '80%', maxWidth: 300, mt: 10 }}>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Where are you headed to?
          </Typography>
          <TextField
            label="Renting time"
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              bgcolor: 'white',
              borderColor: 'primary.main',
              borderRadius: '10px',
            }}
            InputProps={{
              endAdornment: (
                <Typography variant="body2" color="secondary.main" sx={{ ml: 1 }}>
                  x 1$
                </Typography>
              ),
            }}
          />
          <TextField
            label="Your destination"
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              bgcolor: 'white',
              borderColor: 'primary.main',
              borderRadius: '10px',
            }}
            value={destination}
            onChange={handleDestinationChange} // Update destination and trigger loading
          />

          {/* Show loading spinner or parking locations based on loading state */}
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            destination && (
              <Box sx={{ width: '100%', mt: 2 }}>
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
            )
          )}

          <Button variant="contained" color="success" fullWidth sx={{ my: 2 }} 
          onClick={() => navigate('/selected')}
          >
            Select parking
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectParking;
