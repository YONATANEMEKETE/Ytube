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
import Comment from '@/components/Comment';
import { useLocation } from 'react-router-dom';
import { Comments, Vid } from '@/Store/Types';
import { useQuery } from '@tanstack/react-query';
import { DataVids } from '@/Store/Types';

const apiKey = import.meta.env.VITE_SOME_KEY;

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'youtube-data-api-v33.p.rapidapi.com',
  },
};

const optionsComment = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '2af43d2630msh085c19cd72bddd4p1b91dajsn5603fa021fa5',
    'x-rapidapi-host': 'youtube-data-api-v33.p.rapidapi.com',
  },
};

const VideoDetail = () => {
  const location = useLocation();
  const video: Vid = location.state;

  const { data, error, isLoading } = useQuery({
    queryKey: ['vidData'],
    queryFn: () => fetchVideos(),
  });

  const {
    data: comData,
    error: comError,
    isLoading: comIsLoading,
  } = useQuery({
    queryKey: ['comments'],
    queryFn: () => fetchComments(),
  });

  const fetchComments = async (): Promise<Comments | undefined> => {
    const urlComment = `https://youtube-data-api-v33.p.rapidapi.com/commentThreads?part=snippet%2Cid&key=AIzaS9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6a7b8c9dTr&videoId=${video.id}&maxResults=50&order=relevance`;

    try {
      const response = await fetch(urlComment, optionsComment);
      const vids = response.json();
      return vids;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVideos = async (): Promise<DataVids | undefined> => {
    const url = `https://youtube-data-api-v33.p.rapidapi.com/videos?part=snippet%2Cid%2Cplayer%2Cstatistics&key=AIzaS9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6a7b8c9dTr&chart=mostPopular&maxResults=50&videoCategoryId=${video?.snippet.categoryId}`;
    try {
      const response = await fetch(url, options);
      const vids = response.json();
      return vids;
    } catch (error) {
      console.error(error);
    }
  };

  const videoSuggestions = data?.items;
  const comments = comData?.items;

  console.log(comments);

  const likes = video.statistics.likeCount;
  let likesCount: string | undefined;

  if (likes.length == 6) {
    likesCount = `${likes.charAt(0)}${likes.charAt(1)}${likes.charAt(2)} K`;
  } else if (likes.length == 5) {
    likesCount = `${likes.charAt(0)}${likes.charAt(1)} K`;
  } else if (likes.length == 7) {
    likesCount = `${likes.charAt(0)}${
      likes.charAt(1) != '0' ? `. ${likes.charAt(1)} ` : ''
    } M`;
  }

  let viewsCount: string | undefined;
  if (video.statistics.viewCount.length == 8) {
    viewsCount = `${video.statistics.viewCount.charAt(
      0
    )}${video.statistics.viewCount.charAt(1)}`;
  } else if (video.statistics.viewCount.length == 7) {
    viewsCount = `${video.statistics.viewCount.charAt(0)}${
      video.statistics.viewCount.charAt(1) != '0'
        ? `.${video.statistics.viewCount.charAt(1)}`
        : ''
    }${video.statistics.viewCount.charAt(2)}`;
  } else if (video.statistics.viewCount.length == 6) {
    viewsCount = `${video.statistics.viewCount.charAt(
      0
    )}${video.statistics.viewCount.charAt(
      1
    )}${video.statistics.viewCount.charAt(2)}`;
  }

  const date = new Date().getMonth();
  const day = new Date().getDate();
  const pubDateString = video.snippet.publishedAt;
  const pubDate = new Date(pubDateString);
  const pubMonth = pubDate.getMonth();
  const pubYear = pubDate.getFullYear();
  const pubDays = pubDate.getDate();

  const vidAgo = date - pubMonth;
  const vidDay = day - pubDays;
  return (
    <div className="">
      <Navigation />
      <div className="flex flex-col min-[1100px]:flex-row items-start justify-self-start min-[1100px]:mx-[4rem]">
        <div className="mb-12 min-[1100px]:w-5/6">
          <div className="mt-[6rem] ml-[3rem]  mr-[3rem]  h-max overflow-hidden">
            {/* {video.player.embedHtml} */}
            <img
              src={video.snippet.thumbnails.high.url}
              alt="video"
              className="w-full object-cover object-center aspect-video rounded-lg mb-6"
            />

            <div className="text-2xl text-mysecondary font-header font-semibold mb-4">
              {video.snippet.title}
            </div>

            <div className="flex flex-col gap-y-6 min-[1020px]:flex-row justify-between mb-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-x-6 min-[1020px]:gap-x-4">
                  <div className="flex items-start gap-x-2">
                    <Avatar className="size-12 -z-10 mr-2">
                      <AvatarImage src={video.snippet.thumbnails.high.url} />
                      <AvatarFallback className="bg-mysecondary text-myprimary text-lg font-detail font-semibold">
                        YT
                      </AvatarFallback>
                    </Avatar>
                    <div className="w-max">
                      <div className="text-lg font-header font-semibold text-mysecondary -mb-1">
                        {video.snippet.channelTitle}
                      </div>
                      <div className=" font-detail font-semibold">
                        -- subscribe
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="text-lg text-mysecondary px-4 font-bold font-header py-4 rounded-full flex gap-x-2 items-center"
                  >
                    <Bell />
                    Subscribe
                  </Button>
                </div>

                <Button
                  variant="secondary"
                  size="icon"
                  className="text-lg text-mysecondary font-semibold mr-4 min-[1100px]:mr-0 rounded-full min-[1020px]:hidden flex place-content-center"
                >
                  <GripVertical />
                </Button>
              </div>

              <div className="flex gap-x-1 items-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg text-mysecondary  font-detail rounded-full px-4"
                >
                  <ThumbsUp />
                  <span className="ml-2">
                    {likesCount}
                    {/* {likesCount}{' '}
                    {likesCount?.length == 3 || likesCount?.charAt(1) != '.'
                      ? 'K'
                      : 'M'} */}
                  </span>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg text-mysecondary  font-detail rounded-full px-4 min-[1100px]:hidden"
                >
                  <Forward />
                  <span className="ml-2">Share</span>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg text-mysecondary  font-detail rounded-full px-4"
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
              <div className="font-semibold mb-2">
                {viewsCount} {viewsCount?.length == 3 ? 'K' : 'M'} {} &#8226; {}{' '}
                {vidAgo != 0 ? vidAgo : vidDay}{' '}
                {vidAgo
                  ? `month${vidAgo > 1 ? 's' : ''}`
                  : `day${vidDay > 1 ? 's' : ''}`}{' '}
                ago
              </div>
              <div className="font-semibold leading-snug h-12 overflow-hidden">
                {video.snippet.description}
              </div>
              {video.snippet.description.length != 0 && (
                <div className="font-semibold cursor-pointer">...more</div>
              )}
            </div>
          </div>

          <div className="hidden min-[1100px]:block  mt-4 mx-[3rem]">
            <div className="text-xl font-header font-semibold text-mysecondary mb-8">
              {Number(video.statistics.commentCount).toLocaleString()} Comments
            </div>
            <div className="space-y-8">
              {comments?.map((item, index) => {
                return (
                  <Comment
                    key={index}
                    name={
                      item.snippet.topLevelComment.snippet.authorDisplayName
                    }
                    comment={item.snippet.topLevelComment.snippet.textOriginal}
                    image={
                      item.snippet.topLevelComment.snippet.authorProfileImageUrl
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="px-[3rem] min-[1100px]:px-0 space-y-2 min-[1100px]:mt-[6rem] w-full">
          {videoSuggestions?.map((item, index) => {
            return (
              <RelatedVideos
                key={index}
                title={item.snippet.title}
                channelTitle={item.snippet.channelTitle}
                thumb={item.snippet.thumbnails.high.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
