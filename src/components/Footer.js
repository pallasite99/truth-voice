import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={3} bgcolor="primary.main" color="white" textAlign="center">
      <Typography variant="body2">&copy; 2025 Celestium Technologies. All rights reserved.</Typography>
      <Typography variant="body2">
        <Link href="/terms" color="inherit">Terms of Service</Link> | <Link href="/privacy" color="inherit">Privacy Policy</Link>
      </Typography>
    </Box>
  );
};

export default Footer;