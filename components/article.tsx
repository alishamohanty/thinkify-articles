import { articleType, articlePropType } from '../types/articles';



const Article = ({ article }: articlePropType) => {

  return (
    <div>
      <div>{article.author}</div>
    </div>
  );
};

export default Article