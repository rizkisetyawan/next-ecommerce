import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';

export default function Product() {
  return (
    <Card variant="outlined" sx={{ width: 145, flexShrink: 0 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media-www.awalmula.co.id/Banner-06.png"
          alt="green iguana"
        />
        <CardContent sx={{ pb: 1 }}>
          <Typography gutterBottom variant="body1" sx={{ fontSize: 13 }}>
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Rp. 15.000
          </Typography>
          <Typography variant="subtitle2" color="GrayText.secondary" sx={{ fontSize: 12, fontWeight: 200 }}>
            Kota Tangerang
          </Typography>
          <Rating name="read-only" value={4} size="small" readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
