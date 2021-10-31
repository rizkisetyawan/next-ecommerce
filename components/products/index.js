import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Product from '../product';

const Products = ({ title, data }) => (
  <Box sx={{ px: 2 }}>
    <Box
      sx={{
        mb: 1,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="subtitle1">
        {title}
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
        data.map((row) => (
          <Product key={row.id} data={row} />
        ))
      }
    </Box>
  </Box>
);

Products.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default Products;
