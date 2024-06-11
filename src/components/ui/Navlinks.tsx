import React from 'react';
import { Button } from './button';

type LinkProp = {
  text: string;
  icon: React.ReactNode;
  btn: string;
};

const Navlinks = ({ text, icon, btn }: LinkProp) => {
  return (
    <div>
      <Button
        variant={`${btn}`}
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
