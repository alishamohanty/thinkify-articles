import axios from 'axios';

export const fetchArticles = () => {
  return axios.get('https://jsonmock.hackerrank.com/api/articles');
};
