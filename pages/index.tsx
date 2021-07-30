import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';
import {
  selectArticles,
  getArticlesAsync,
  articlesDefaultState,
} from '../redux/articlesSlice';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { articleType } from '../types/articles';
import Article from '../components/article'

export default function Home() {
  const {articles} = useAppSelector(selectArticles);
  const [articlesState, setArticlesState] = useState<Array<articleType>>([]);
  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch(getArticlesAsync())
  }, [dispatch])

  useEffect(() => {
    if (articles) {
      setArticlesState(articles)
      console.log(articles);
    }
  }, [articles]);

  return (
    <div className={styles.container}>
      Hello from Thinkify!!
      {articlesState ? (
        articlesState.map((article: articleType) => {
          return <Article key={article.created_at} article={article} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}
