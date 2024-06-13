import React from 'react';
import VideoCard from './ui/VideoCard';
import { useQuery } from '@tanstack/react-query';
import { DataTag } from '@tanstack/react-query';
import { DataVids } from '@/Store/Types';

// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = import.meta.env.VITE_SOME_KEY;

const url = `https://youtube-data-api-v33.p.rapidapi.com/videos?part=snippet%2Cid%2Cplayer%2Cstatistics&key=AIzaS9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6a7b8c9dTr&chart=mostPopular&maxResults=50&videoCategoryId=${28}`;
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'youtube-data-api-v33.p.rapidapi.com',
  },
};

const Videos = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['vidData'],
    queryFn: () => fetchVideos(),
  });

  const fetchVideos = async (): Promise<DataVids | undefined> => {
    try {
      const response = await fetch(url, options);
      const vids = response.json();
      return vids;
    } catch (error) {
      console.error(error);
    }
  };

  const videosAll = data?.items;

  if (isLoading) {
    return (
      <div className="mt-[10rem] ml-[35rem] text-2xl font-headet text-mysecondary font-bold">
        please wait...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-[10rem] ml-[35rem] text-2xl font-headet text-mysecondary font-bold">
        ooops something happened
      </div>
    );
  }

  return (
    <div
      className="relativ mt-[6rem] -z-20 w-max mx-auto py-4 px-4  xl:ml-[18rem] grid grid-cols-1 
      min-[800px]:grid-cols-2 min-[1300px]:grid-cols-3 items-start justify-center gap-4"
    >
      {videosAll?.map((item) => {
        const date = new Date().getMonth();
        const day = new Date().getDate();
        const pubDateString = item.snippet.publishedAt;
        const pubDate = new Date(pubDateString);
        const pubMonth = pubDate.getMonth();
        const pubYear = pubDate.getFullYear();
        const pubDays = pubDate.getDate();
        const views = item.statistics.viewCount;

        // console.log(views);

        const vidAgo = date - pubMonth;
        const vidDay = day - pubDays;

        return (
          <VideoCard
            key={item.id}
            title={item.snippet.title}
            channelName={item.snippet.channelTitle}
            thumbnail={item.snippet.thumbnails.high.url}
            views={views}
            vidMonth={vidAgo}
            vidDay={vidDay}
          />
        );
      })}
      {/* <VideoCard title="hello" channelName="yonatane" /> */}
    </div>
  );
};

export default Videos;
