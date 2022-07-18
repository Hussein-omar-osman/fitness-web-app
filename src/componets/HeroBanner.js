import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/img.webp';

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position='relative'
      p='20px'
    >
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={500}
        sx={{ fontSize: { lg: '40px', xs: '35px' } }}
        mb='20px'
        mt='25px'
      >
        No Pain, No Gain.
      </Typography>
      <Typography fontSize='22px' fontFamily='Alegreya' lineHeight='35px'>
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href='#exercises'
          style={{
            marginTop: '45px',
            textDecoration: 'none',
            width: '200px',
            textAlign: 'center',
            background: '#FF2625',
            padding: '14px',
            fontSize: '22px',
            textTransform: 'none',
            color: 'white',
            borderRadius: '4px',
          }}
        >
          Explore Exercises
        </a>
      </Stack>

      <img
        src={HeroBannerImage}
        alt='hero-banner'
        className='hero-banner-img'
      />
    </Box>
  );
};

export default HeroBanner;
