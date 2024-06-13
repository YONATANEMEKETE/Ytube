import Navigation from '@/components/Navigation';
import React from 'react';
import sampleThumb from '../assets/sampleThumb.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  ArrowDownToLine,
  Bell,
  Forward,
  GripVertical,
  ThumbsUp,
} from 'lucide-react';
import RelatedVideos from '@/components/RelatedVideos';

const VideoDetail = () => {
  return (
    <div className="pb-36">
      <Navigation />
      <div className="mb-12">
        <div className=" mt-[6rem] ml-[3rem] mr-[3rem] h-max overflow-hidde">
          <img
            src={sampleThumb}
            alt="video"
            className="w-full object-cover object-center aspect-video rounded-lg mb-6"
          />

          <div className="text-2xl text-mysecondary font-header font-semibold mb-4">
            4 Things you should know before making million
          </div>

          <div className="flex flex-col gap-y-6 min-[1020px]:flex-row justify-between mb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-x-8 min-[1020px]:gap-x-6">
                <div className="flex items-start gap-x-2">
                  <Avatar className="size-12 -z-10 mr-2">
                    <AvatarImage />
                    <AvatarFallback className="bg-mysecondary text-myprimary text-lg font-detail font-semibold">
                      YT
                    </AvatarFallback>
                  </Avatar>
                  <div className="w-max">
                    <div className="text-lg font-header font-semibold text-mysecondary -mb-1">
                      IMAN GAHDZI
                    </div>
                    <div className=" font-detail font-semibold">
                      4.4M subscribe
                    </div>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg text-mysecondary font-bold font-header py-4 rounded-full flex gap-x-2 items-center"
                >
                  <Bell />
                  Subscribe
                </Button>
              </div>

              <Button
                variant="secondary"
                size="icon"
                className="text-lg text-mysecondary font-semibold mr-4 rounded-full min-[1020px]:hidden flex place-content-center"
              >
                <GripVertical />
              </Button>
            </div>

            <div className="flex gap-x-2 items-center">
              <Button
                variant="secondary"
                size="lg"
                className="text-lg text-mysecondary  font-detail rounded-full"
              >
                <ThumbsUp />
                <span className="ml-2">22K</span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg text-mysecondary  font-detail rounded-full"
              >
                <Forward />
                <span className="ml-2">Share</span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg text-mysecondary  font-detail rounded-full"
              >
                <ArrowDownToLine />
                <span className="ml-2">Download</span>
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="hidden text-lg text-mysecondary font-semibold mr-4 rounded-full min-[1020px]:flex place-content-center"
              >
                <GripVertical />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 mx-[3rem] h-max overflow-hidden">
          <div className="w-full px-4 py-2 bg-secondary rounded-lg">
            <div className="font-semibold mb-2">2.4M views 14 days ago</div>
            <div className="font-semibold leading-snug">
              don't know what bussiness to stickk to whnt starting? i have a few
              here...more
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[3rem] space-y-2">
        <RelatedVideos />
        <RelatedVideos />
        <RelatedVideos />
        <RelatedVideos />
        <RelatedVideos />
        <RelatedVideos />
        <RelatedVideos />
        <RelatedVideos />
        <RelatedVideos />
        <RelatedVideos />
        <RelatedVideos />
      </div>
    </div>
  );
};

export default VideoDetail;
