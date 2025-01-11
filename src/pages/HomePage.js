import React from 'react';
import HeroBanner from '../components/HeroBanner'; // Correct import for default export
import QuickLinks from '../components/QuickLinks';
import FeaturedCauses from '../components/FeaturedCauses';

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <FeaturedCauses />
      <QuickLinks />
    </div>
  );
};

export default HomePage;