import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Rating,
  Box,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { rp } from '../../utils';

export default function Product({ data }) {
  const {
    name,
    image,
    price,
    location,
    rates,
    sales,
  } = data;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const valSize = matches ? 185 : 145;
  const router = useRouter();

  return (
    <Card variant="outlined" sx={{ width: valSize, flexShrink: 0 }}>
      <CardActionArea onClick={() => router.push(`/product/${name}`)}>
        <Image
          width={valSize}
          height={valSize}
          src={image}
          alt={name}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography gutterBottom variant="body1" sx={{ fontSize: 13 }}>
            {name}
          </Typography>
          <Box>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
              Rp.
              {' '}
              {rp(price)}
            </Typography>
            <Typography variant="subtitle2" color="GrayText.secondary" sx={{ fontSize: 12, fontWeight: 200 }}>
              {location}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Rating name="read-only" value={rates} size="small" sx={{ fontSize: 16 }} readOnly />
              <Typography variant="subtitle2" color="GrayText.secondary" sx={{ fontSize: 12, fontWeight: 200 }}>
                {sales}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Product.propTypes = {
  data: PropTypes.object,
};
