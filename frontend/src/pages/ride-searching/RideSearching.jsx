import React from 'react';
import { Container, TextField, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const RideSearching = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #673AB7, #512DA8)'
      }}
    >
      <Container maxWidth="xs" style={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ pt: 10, color:'white' }} gutterBottom>
          Where are you headed to?
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField 
            fullWidth 
            label="Your location" 
            variant="outlined" 
            margin="normal" 
            sx={{
              bgcolor: 'white', 
              borderColor: 'primary.main',
              borderRadius: '10px'
            }}
          />
          <TextField 
            fullWidth 
            label="Your destination" 
            variant="outlined" 
            margin="normal" 
            sx={{
                bgcolor: 'white', 
                borderColor: 'primary.main',
                borderRadius: '10px'
            }}
          />
          <Typography variant="subtitle1" color="white" gutterBottom>
            free 99
          </Typography>
          <TextField 
            fullWidth 
            placeholder="Additional information" 
            multiline 
            rows={4} 
            variant="outlined" 
            margin="normal" 
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
          onClick={() => navigate('/loading-drv')}

            style={{ marginTop: '1rem', borderRadius: 10 }}
          >
            Find driver
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RideSearching;
