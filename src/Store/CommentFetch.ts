import { useQuery } from '@tanstack/react-query';
import { Comments } from './Types';

export const urlComment = `https://youtube-data-api-v33.p.rapidapi.com/commentThreads?part=snippet%2Cid&key=AIzaS9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6a7b8c9dTr&videoId=_VnqcBnWM0k&maxResults=10&order=relevance`;
export const optionsComment = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '2af43d2630msh085c19cd72bddd4p1b91dajsn5603fa021fa5',
    'x-rapidapi-host': 'youtube-data-api-v33.p.rapidapi.com',
  },
};

const { data, error, isLoading } = useQuery({
  queryKey: ['comments'],
  queryFn: () => fetchComments(),
});

export const fetchComments = async (): Promise<Comments | undefined> => {
  try {
    const response = await fetch(urlComment, optionsComment);
    const vids = response.json();
    return vids;
  } catch (error) {
    console.error(error);
  }
};
