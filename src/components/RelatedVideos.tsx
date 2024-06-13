import React from 'react';
import sampleThumb from '../assets/sampleThumb.jpg';
import { Button } from './ui/button';
import { GripVertical } from 'lucide-react';

type RelatedProp = {
  title: string;
  channelTitle: string;
  thumb: string;
};

const RelatedVideos = ({ title, channelTitle, thumb }: RelatedProp): any => {
  return (
    <div
      className="h-[8rem] flex items-start justify-between w-full hover:bg-secondary 
    rounded-lg py-4 px-4 overflow-hidden cursor-pointer"
    >
      <div className="flex items-start gap-x-4">
        <div className="img w-[10rem]  overflow-hidden h-[6rem]">
          <img
            src={thumb}
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <div className="w-2/4">
          <div className="font-detail font-bold text-mysecondary mb-1">
            {title}
          </div>
          <div className="font-semibold text-mysecondary">{channelTitle}</div>
          <div className="text-xs font-semibold">124K views 17 days ago</div>
        </div>
      </div>

      <div>
        <Button
          variant="ghost"
          size="icon"
          className="text-lg text-mysecondary font-semibold  rounded-md  flex place-content-center"
        >
          <GripVertical />
        </Button>
      </div>
    </div>
  );
};

export default RelatedVideos;
