import React from 'react';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => (
  <Box
    sx={{
      maxWidth: 'lg',
      px: 2,
      mx: 'auto',
      overflow: 'hidden',
    }}
  >
    <Carousel
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <Image
        width={1240}
        height={567}
        src="https://media-www.awalmula.co.id/mageplaza/bannerslider/banner/image/b/a/banner-okt-2021-06.jpg"
        alt="hallowen Sell"
      />
      <Image
        width={1240}
        height={567}
        src="https://media-www.awalmula.co.id/mageplaza/bannerslider/banner/image/b/a/banner_cordlife_slide_2_desktop-02-min.jpg"
        alt="Gen Awal Mula"
      />
      <Image
        width={1240}
        height={567}
        src="https://media-www.awalmula.co.id/mageplaza/bannerslider/banner/image/b/a/banner-okt-2021-04.jpg"
        alt="Sweet Memories"
      />
    </Carousel>
  </Box>
);

export default Slider;
