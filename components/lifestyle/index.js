import React from 'react';
import {
  Box, Typography, Stack, Chip,
} from '@mui/material';
import Product from '../product';
// import Image from 'next/image';

const Lifestyle = () => (
  <>
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
      <Chip label="Diet" color="primary" variant="outlined" />
      <Chip label="Nutrient Claims" color="primary" variant="outlined" />
      <Chip label="Better Sleep" color="primary" variant="outlined" />
      <Chip label="Immune Booster" color="primary" variant="outlined" />
      <Chip label="Weight Loss" color="primary" variant="outlined" />
      <Chip label="Stress & Anxiety Relieve" color="primary" variant="outlined" />
    </Stack>

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

export default Lifestyle;
