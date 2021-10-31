import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Product from '../product';
// import Image from 'next/image';

const Exclusive = ({ products }) => (
  <Box sx={{ px: 2 }}>
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
        pb: 1,
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
      {
        products.map((row) => (
          <Product key={row.id} data={row} />
        ))
      }
    </Box>
  </Box>
);

Exclusive.propTypes = {
  products: PropTypes.array,
};

export default Exclusive;
