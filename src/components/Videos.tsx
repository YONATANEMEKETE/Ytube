import React from 'react';
import VideoCard from './ui/VideoCard';
import { useQuery } from '@tanstack/react-query';

// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = import.meta.env.VITE_SOME_KEY;

const url =
  'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '2af43d2630msh085c19cd72bddd4p1b91dajsn5603fa021fa5',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};

const Videos = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['vidData'],
    queryFn: () => fetchVideos(),
  });

  const fetchVideos = async () => {
    try {
      const response = await fetch(url, options);
      const vids = response.json();
      return vids;
    } catch (error) {
      console.error(error);
    }
  };

  const videos: {
    id: { videoId: string };
    kind: string;
    snippet: { title: string; channelTitle: string };
  }[] = data?.items;
  return (
    <div
      className="relativ mt-[6rem] -z-20 w-max mx-auto py-4 px-4  xl:ml-[18rem] grid grid-cols-1 
      min-[800px]:grid-cols-2 min-[1300px]:grid-cols-3 items-start justify-center gap-4"
    >
      {videos?.map((item, index) => (
        <VideoCard
          key={index}
          title={item.snippet.title}
          channelName={item.snippet.channelTitle}
        />
      ))}
      {/* <VideoCard title="hello" channelName="yonatane" /> */}
    </div>
  );
};

export default Videos;
