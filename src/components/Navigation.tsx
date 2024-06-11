import React from 'react';
import youtube from '../assets/youtube.png';
import { Button } from './ui/button';
import { AlignJustify, Bell, Video, Mic, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Input } from './ui/input';

const Navigation = () => {
  return (
    <div className="nav fixed top-0 left-0 w-full h-[4rem] ">
      <div className="h-full flex items-center justify-between px-4 lg:px-8 xl:px-12">
        <div className="flex items-center gap-x-4 h-full">
          <Button variant="ghost" size="icon" className="rounded-full">
            <AlignJustify className="size-6 font-semibold text-mysecondary" />
          </Button>
          <div className="flex items-center gap-x-2">
            <img src={youtube} className="size-8" />
            <div className="text-xl font-header font-bold text-mysecondary">
              Ytube
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-x-2">
          <div className="flex items-center">
            <Input
              placeholder="search"
              className="lg:w-[27rem] xl:max-w-[35rem] rounded-s-full focus-visible:ring-0 
              focus-visible:ring-offset-0 placeholder:font-header placeholder:text-lg text-mysecondary font-semibold text-lg"
            />
            <Button
              variant="secondary"
              size="icon"
              className="rounded-e-full h-10 w-12 pr-2 border"
            >
              <Search />
            </Button>
          </div>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Mic />
          </Button>
        </div>
        <div className="flex items-center gap-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Video />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-mysecondary text-myprimary text-base">
                <p>create</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Bell />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-mysecondary text-myprimary text-base">
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Avatar className="">
            <AvatarImage />
            <AvatarFallback className="bg-mysecondary text-myprimary text-lg font-detail font-semibold">
              YT
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
