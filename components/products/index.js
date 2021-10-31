import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Product from '../product';

const Products = ({ title, data, filled = false }) => (
  <Box
    sx={{
      maxWidth: 'lg',
      px: 2,
      mt: !filled ? 0 : 2,
      mx: 'auto',
    }}
  >
    <Box
      sx={{
        mb: !filled ? 1 : 2,
        display: 'flex',
        justifyContent: !filled ? 'space-between' : 'center',
      }}
    >
      <Typography variant="subtitle1">
        {title}
      </Typography>
      {!filled && (
        <Typography variant="caption" color="text.secondary">
          Lihat Semua
        </Typography>
      )}
    </Box>
    <Box
      sx={{
        pb: 1,
        mb: 2,
        display: 'flex',
        justifyContent: !filled ? 'flex-start' : 'center',
        flexWrap: !filled ? 'nowrap' : 'wrap',
        gap: 1,
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
  filled: PropTypes.bool,
};

export default Products;
