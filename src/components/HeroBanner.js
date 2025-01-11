import React from 'react';
import { Box, Typography, Button } from '@mui/material';
// import './HeroBanner.css'; // Add CSS for animations and styles

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/Justice.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Join the Movement
        </Typography>
        <Typography variant="h5" gutterBottom>
          Be the change you want to see in the world.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 3, px: 5 }}
          href="#action"
        >
          Take Action Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroBanner;