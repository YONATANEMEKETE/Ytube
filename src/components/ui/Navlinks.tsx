import React from 'react';
import { Button } from './button';
import useCategory from '@/Store/CatagoriesStore';

type LinkProp = {
  text: string;
  icon: React.ReactNode;
  btn: string;
  onClick?: () => void;
};

const Navlinks = ({ text, icon, btn, onClick }: LinkProp) => {
  const { category } = useCategory();

  return (
    <div>
      <Button
        onClick={onClick}
        variant={'ghost'}
        size="lg"
        className="w-full flex items-center gap-x-6 justify-start pl-4"
      >
        {icon}
        {/* <Home className="text-lg text-mysecondary font-semibold" /> */}
        <div className="text-lg font-detail font-semibold text-mysecondary">
          {text}
        </div>
      </Button>
    </div>
  );
};

export default Navlinks;
