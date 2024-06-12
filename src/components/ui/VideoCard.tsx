import React from 'react';
import sampleThumb from '../../assets/sampleThumb.jpg';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

type CardProp = {
  title: string;
  channelName: string;
  thumbnail: string;
  views: string;
  vidMonth: number;
  vidDay: number;
};

const VideoCard = ({
  title,
  channelName,
  thumbnail,
  views,
  vidMonth,
  vidDay,
}: CardProp) => {
  // const viewCount = 0;
  // if ((views.length = 8)) {
  //   viewCount = views.charAt(0);
  // }

  return (
    <div className="w-[25rem] min-[620px]:w-[30rem] min-[800px]:w-[22rem] min-[1300px]:w-[20rem] h-max mx-auto">
      <div className="relative w-full h-[50%] overflow-hidden mb-6">
        <img
          src={thumbnail}
          className="w-full h-full object-cover object-center rounded-lg hover:rounded-none"
        />
        <div className="absolute bottom-2 right-4 text-myprimary text-lg font-detail font-semibold">
          20:12
        </div>
      </div>
      <div className="flex items-start gap-x-6">
        <div>
          <Avatar className="size-12 -z-10">
            <AvatarImage src={thumbnail} />
            <AvatarFallback className="bg-mysecondary text-myprimary text-lg font-detail font-semibold">
              YT
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="text-lg font-header font-bold text-mysecondary mb-2 overflow-hidden">
            {title}
          </div>
          <p className="text-base font-detail text-mysecondary font-extrabold mb-1">
            {channelName}
          </p>
          <div>
            80M. {vidMonth != 0 ? vidMonth : vidDay}{' '}
            {vidMonth
              ? `month${vidMonth > 1 ? 's' : ''}`
              : `day${vidDay > 1 ? 's' : ''}`}{' '}
            ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
