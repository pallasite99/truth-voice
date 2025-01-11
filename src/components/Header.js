import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          TruthVoice
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/learn">Learn</Button>
        <Button color="inherit" component={Link} to="/act">Act</Button>
        <Button color="inherit" component={Link} to="/community">Community</Button>
        <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;