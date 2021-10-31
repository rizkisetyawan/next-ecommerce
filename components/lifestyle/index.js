import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Typography, Stack, Chip,
} from '@mui/material';
// import Product from '../product';

const Lifestyle = ({ listLifestyle }) => (
  <Box sx={{ px: 2 }}>
    <Box
      sx={{
        mb: 1,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="subtitle1">
        Lifestyle
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Lihat Semua
      </Typography>
    </Box>
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mb: 1,
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {
        listLifestyle.map((row) => (
          <Chip
            key={row.id}
            label={row.name}
            color="primary"
            variant="filled"
          />
        ))
      }
    </Stack>
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mb: 1,
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {
        listLifestyle.map((row) => (
          <Chip
            key={row.id}
            label={row.name}
            color="secondary"
            variant="outlined"
          />
        ))
      }
    </Stack>
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
      {/* <Product />
      <Product />
      <Product />
      <Product />
      <Product /> */}
    </Box>
  </Box>
);

Lifestyle.propTypes = {
  listLifestyle: PropTypes.array,
};

export default Lifestyle;
