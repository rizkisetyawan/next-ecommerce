import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: 'primary.main',
      py: 2,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Typography variant="caption" color="common.white">Copyright © 2021 · Rizki Setyawan</Typography>
  </Box>
);

export default Footer;
