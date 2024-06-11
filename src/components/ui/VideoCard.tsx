import React from 'react';
import sampleThumb from '../../assets/sampleThumb.jpg';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const VideoCard = () => {
  return (
    <div className="w-[25rem] min-[620px]:w-[30rem] min-[800px]:w-[22rem] min-[1300px]:w-[20rem] h-max mx-auto">
      <div className="w-full h-2/3 overflow-hidden mb-6">
        <img
          src={sampleThumb}
          className="w-full h-full object-cover object-center rounded-lg hover:rounded-none"
        />
      </div>
      <div className="flex items-start gap-x-6">
        <div>
          <Avatar className="size-12 -z-10">
            <AvatarImage />
            <AvatarFallback className="bg-mysecondary text-myprimary text-lg font-detail font-semibold">
              YT
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="text-lg font-header font-bold text-mysecondary mb-2">
            The 12 truth about being rich. click the sub button down
          </div>
          <p className="text-base font-detail text-mysecondary font-extrabold mb-1">
            Yonatane.M
          </p>
          <div>6M view . 4 months ago</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
