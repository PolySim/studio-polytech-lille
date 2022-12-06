import React from "react";
import { PafInfoType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default function ListArticleView({
  pafArticle,
}: {
  pafArticle: PafInfoType;
}): JSX.Element {
  return (
    <div>
      {pafArticle.map((article) => (
        <div key={article.name}>
          <img
            src={`${cleAPI}/pafImage/${article.id}/${article.extension}`}
            alt={article.name}
          />
          <div>
            <p>{article.name}</p>
            <p> {article.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
