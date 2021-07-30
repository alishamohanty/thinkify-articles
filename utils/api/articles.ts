import axios from 'axios';

export const fetchArticles = () => {
  axios.get('https://jsonmock.hackerrank.com/api/articles');
};
