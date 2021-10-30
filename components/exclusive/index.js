import React from 'react';
import { Box, Typography } from '@mui/material';
import Product from '../product';
// import Image from 'next/image';

const Exclusive = () => (
  <>
    <Box
      sx={{
        mb: 1,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="subtitle1">
        Exclusive Awal Mula
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Lihat Semua
      </Typography>
    </Box>

    <Box
      sx={{
        p: 1,
        mb: 2,
        display: 'flex',
        gap: 1,
        flexWrap: 'nowrap',
        overflowX: 'auto',
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Box>
  </>
);

export default Exclusive;
