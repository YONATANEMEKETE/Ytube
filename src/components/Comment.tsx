import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

type CommentProp = {
  name: string;
  comment: string;
  image: string;
};

const Comment = ({ name, comment, image }: CommentProp) => {
  return (
    <div className="flex items-start gap-x-2">
      <Avatar className="size-12 -z-10 mr-2">
        <AvatarImage src={image} />
        <AvatarFallback className="bg-mysecondary text-myprimary text-lg font-detail font-semibold">
          ?
        </AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <div className="text-lg text-mysecondary font-header font-semibold">
          {name}
        </div>
        <div className="text-base font-detail">{comment}</div>
      </div>
    </div>
  );
};

export default Comment;
