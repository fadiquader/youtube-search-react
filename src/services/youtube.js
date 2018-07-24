import axios from 'axios';

export const YOUTUBE_API_KEY = 'AIzaSyCyHgyf4X7Tq6FKtsYHRGpBSTzDjJHh_ps';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';


export const onSearchChange = query => {
  const params = [
    `q=${query}`,
    `key=${YOUTUBE_API_KEY}`,
    `part=snippet`,
    `type=video`,
    `maxResults=10`
  ].join('&');
  const queryUrl = `${YOUTUBE_API_URL}?${params}`;
  return axios.get(queryUrl);
};
