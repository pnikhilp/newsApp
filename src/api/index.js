import axios from 'axios';
const getAllNews = () => {
  return axios.get('https://api.smallcase.com/news/getNews?count=20&offset=0');
};
export {getAllNews};
