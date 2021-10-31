import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const Kategori = ({ listKatPro }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        maxWidth: 'lg',
        px: 2,
        mx: 'auto',
        mb: matches ? 5 : 2,
      }}
    >
      <Typography variant="subtitle1" sx={{ mb: 1, fontSize: matches ? 24 : 16 }}>
        Kategori
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
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
};

Kategori.propTypes = {
  listKatPro: PropTypes.array,
};

export default Kategori;
