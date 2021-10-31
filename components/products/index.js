import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Product from '../product';

const Products = ({
  title,
  data,
  path,
  filled = false,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        maxWidth: 'lg',
        px: 2,
        mt: !filled ? 0 : 2,
        mx: 'auto',
        mb: matches ? 5 : 2,
      }}
    >
      <Box
        sx={{
          mb: !filled ? 1 : 2,
          display: 'flex',
          justifyContent: !filled ? 'space-between' : 'center',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: matches ? 24 : 16 }}>
          {title}
        </Typography>
        {!filled && (
          <Link href={path}>
            <Typography variant="caption" color="primary" sx={{ display: 'block', cursor: 'pointer', fontSize: matches ? 16 : 12 }}>
              Lihat Semua
            </Typography>
          </Link>
        )}
      </Box>
      <Box
        sx={{
          pb: 1,
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
};

Products.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  data: PropTypes.array,
  filled: PropTypes.bool,
};

export default Products;
