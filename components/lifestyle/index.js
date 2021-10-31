import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Typography, Stack, Chip,
} from '@mui/material';
import Link from 'next/link';
import Product from '../product';
import { getProducts } from '../../services';

const Lifestyle = ({ listLifestyle, filled = false }) => {
  const [state, setState] = useState(null);
  const [stateChild, setStateChild] = useState(null);

  return (
    <Box
      sx={{
        maxWidth: 'lg',
        px: 2,
        mx: 'auto',
        mt: !filled ? 0 : 2,
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
          Lifestyle
        </Typography>
        {!filled && (
          <Link href="/lifestyle">
            <Typography variant="caption" color="text.secondary" sx={{ cursor: 'pointer' }}>
              Lihat Semua
            </Typography>
          </Link>
        )}
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
              variant={state?.name === row.name ? 'filled' : 'outlined'}
              onClick={() => setState(row)}
            />
          ))
        }
      </Stack>
      {
        state && (
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
              state.children_data.map((row) => (
                <Chip
                  key={row.id}
                  label={row.name}
                  color="secondary"
                  variant={stateChild?.name === row.name ? 'filled' : 'outlined'}
                  onClick={() => setStateChild(row)}
                />
              ))
            }
          </Stack>
        )
      }
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
          stateChild && getProducts(stateChild.name).map((row) => (
            <Product key={row.id} data={row} />
          ))
        }
      </Box>
    </Box>
  );
};

Lifestyle.propTypes = {
  listLifestyle: PropTypes.array,
  filled: PropTypes.bool,
};

export default Lifestyle;
