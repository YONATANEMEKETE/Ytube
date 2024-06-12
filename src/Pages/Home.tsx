import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';
import Videos from '@/components/Videos';
import React from 'react';

const Home = () => {
  return (
    <div className="">
      <Navigation />
      <Sidebar />
      <Videos />
    </div>
  );
};

export default Home;
