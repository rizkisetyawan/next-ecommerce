import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Kategori = ({ listKatPro }) => (
  <Box sx={{ px: 2 }}>
    <Typography variant="subtitle1" sx={{ mb: 1 }}>
      Kategori
    </Typography>
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      {
        listKatPro.map((row) => (
          <Image
            key={row.id}
            width={321}
            height={129}
            src={
              row.name === 'Food & Beverages'
                ? 'https://media-www.awalmula.co.id/Banner-06.png'
                : 'https://media-www.awalmula.co.id/Banner-07.png'
            }
            alt={row.name}
          />
        ))
      }
    </Box>
  </Box>
);

Kategori.propTypes = {
  listKatPro: PropTypes.array,
};

export default Kategori;
