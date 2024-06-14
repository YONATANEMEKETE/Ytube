import React from 'react';
import { Button } from './ui/button';
import { AlignJustify, Lightbulb, Trophy } from 'lucide-react';
import youtube from '../assets/youtube.png';
import Navlinks from './ui/Navlinks';
import {
  Home,
  TvMinimalPlay,
  History,
  Flame,
  Music2,
  Radio,
  Gamepad2,
  Newspaper,
} from 'lucide-react';
import useSidebar from '@/Store/Store';
import useCategory from '@/Store/CatagoriesStore';

const Sidebar = () => {
  const { onClose, isOpen } = useSidebar();
  const { changeNew } = useCategory();

  const closeNav = () => {
    onClose();
  };

  return (
    <div
      className={`fixed top-0 xl:top-[4rem] ${
        isOpen ? 'left-0' : '-left-[100%] xl:left-0'
      } h-screen w-max bg-white shadow-lg transition-transform duration-700 xl:shadow-none z-30 
        pb-20`}
    >
      <div className="w-full h-max pt-4 flex flex-col gap-y-6">
        <div className="logo pl-6 xl:hidden">
          <div className="flex items-center gap-x-4 h-full">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={closeNav}
            >
              <AlignJustify className="size-6 font-semibold text-mysecondary" />
            </Button>
            <div className="flex items-center gap-x-2">
              <img src={youtube} className="size-8" />
              <div className="text-xl font-header font-bold text-mysecondary">
                Ytube
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 space-y-2 pb-4 border-b">
          <Navlinks
            btn="secondary"
            text="Home"
            icon={<Home className="text-lg text-mysecondary font-semibold" />}
          />
          <Navlinks
            btn="ghost"
            text="Subscription"
            icon={
              <TvMinimalPlay className="text-lg text-mysecondary font-semibold" />
            }
          />
          <Navlinks
            btn="ghost"
            text="History"
            icon={
              <History className="text-lg text-mysecondary font-semibold" />
            }
          />
        </div>
      </div>
      <div className="pt-4 px-4 space-y-2">
        <Button
          variant="ghost"
          size="default"
          className="flex justify-start pl-4 w-full text-lg font-detail text-mysecondary font-bold"
        >
          Explore
        </Button>
        <div className="w-full">
          <Navlinks
            onClick={() => {
              changeNew(28);
            }}
            btn="ghost"
            text="Trending"
            icon={<Flame className="text-lg text-mysecondary font-semibold" />}
          />
          <Navlinks
            onClick={() => {
              changeNew(10);
            }}
            btn="ghost"
            text="Music"
            icon={<Music2 className="text-lg text-mysecondary font-semibold" />}
          />
          <Navlinks
            onClick={() => {
              changeNew(1);
            }}
            btn="ghost"
            text="Live"
            icon={<Radio className="text-lg text-mysecondary font-semibold" />}
          />
          <Navlinks
            onClick={() => {
              changeNew(20);
            }}
            btn="ghost"
            text="Gaming"
            icon={
              <Gamepad2 className="text-lg text-mysecondary font-semibold" />
            }
          />
          <Navlinks
            onClick={() => {
              changeNew(25);
            }}
            btn="ghost"
            text="News"
            icon={
              <Newspaper className="text-lg text-mysecondary font-semibold" />
            }
          />
          <Navlinks
            onClick={() => {
              changeNew(17);
            }}
            btn="ghost"
            text="Sport"
            icon={<Trophy className="text-lg text-mysecondary font-semibold" />}
          />
          <Navlinks
            onClick={() => {
              changeNew(27);
            }}
            btn="ghost"
            text="Learning"
            icon={
              <Lightbulb className="text-lg text-mysecondary font-semibold" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
