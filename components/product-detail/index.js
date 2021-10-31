import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import {
  Box, Typography, Rating,
} from '@mui/material';
import { rp } from '../../utils';

const ProductDetail = ({ data }) => {
  const {
    name,
    image,
    price,
    location,
    rates,
    sales,
  } = data;
  return (
    <Box
      sx={{
        px: 2,
        mb: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ px: 4 }}>
        <Image
          width={500}
          height={500}
          src={image}
          alt={name}
        />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>{name}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 4 }}>
          <Typography color="primary" sx={{ fontSize: 20, fontWeight: 700 }}>
            Rp.
            {' '}
            {rp(price)}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Rating name="read-only" value={rates} size="medium" readOnly />
            <Typography variant="subtitle2" color="GrayText.secondary" sx={{ fontSize: 14, fontWeight: 200 }}>
              {rates.toFixed(1)}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="subtitle2" color="GrayText.secondary" sx={{ fontSize: 18, fontWeight: 400 }}>
            {location}
          </Typography>
          <Typography variant="subtitle2" color="GrayText.secondary" sx={{ fontWeight: 400 }}>
            Terjual
            {' '}
            {sales}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

ProductDetail.propTypes = {
  data: PropTypes.array,
};

export default ProductDetail;
