import React from 'react';
import { Box } from '@mui/material';
import SearchExercises from '../componets/SearchExercises';
import Exercises from '../componets/Exercises';
import HeroBanner from '../componets/HeroBanner';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
