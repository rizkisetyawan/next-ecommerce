import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Kategori = () => (
  <>
    <Typography variant="subtitle1" sx={{ mb: 1 }}>
      Kategori
    </Typography>
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <Image
        width={321}
        height={129}
        src="https://media-www.awalmula.co.id/Banner-06.png"
        alt="food-beverage"
      />
      <Image
        width={321}
        height={129}
        src="https://media-www.awalmula.co.id/Banner-07.png"
        alt="health"
      />
    </Box>
  </>

);

export default Kategori;
