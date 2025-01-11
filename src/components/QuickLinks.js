import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { FaLightbulb, FaPeopleCarry } from 'react-icons/fa';

const links = [
  { title: 'Learn', icon: <FaLightbulb />, path: '/learn' },
  
  { title: 'Connect', icon: <FaPeopleCarry />, path: '/community' },
];

const QuickLinks = () => {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mt: 5 }}>
      {links.map((link, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Box
            sx={{
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '15px',
              padding: '20px',
              color: 'white',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box sx={{ fontSize: '50px', mb: 2 }}>{link.icon}</Box>
            <Typography variant="h5" gutterBottom>{link.title}</Typography>
            <Button variant="outlined" color="inherit" href={link.path}>
              Explore
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default QuickLinks;