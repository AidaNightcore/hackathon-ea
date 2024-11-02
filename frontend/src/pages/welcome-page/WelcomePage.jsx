
import React, { useState } from 'react';
import { Box } from '@mui/material';
import LoginScreen from './LoginScreen';
import Dashboard from './Dashboard';

const WelcomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #673AB7, #512DA8)'
      }}
    >
      {isLoggedIn ? <Dashboard /> : <LoginScreen onLogin={handleLogin} />}
    </Box>
  );
};

export default WelcomePage;
