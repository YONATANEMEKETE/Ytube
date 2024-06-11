import React from 'react';
import VideoCard from './ui/VideoCard';

const Videos = () => {
  return (
    <div
      className="mt-[6rem] -z-20 w-max mx-auto py-4 px-4  xl:ml-[18rem] grid grid-cols-1 
      min-[800px]:grid-cols-2 min-[1300px]:grid-cols-3 items-center justify-center gap-4"
    >
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default Videos;
