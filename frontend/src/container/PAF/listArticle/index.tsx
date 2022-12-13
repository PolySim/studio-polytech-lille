import React, { useContext } from "react";
import { PafInfoType } from "src/type";
import { Link } from "react-router-dom";
import { ConnectionContext } from "src/context";

const cleAPI = process.env.REACT_APP_API_URL;

export default function ListArticleView({
  pafArticle,
}: {
  pafArticle: PafInfoType;
}): JSX.Element {
  const { connected, iv } = useContext(ConnectionContext);
  return (
    <div>
      {connected
        ? pafArticle.map((article) => (
            <Link to={`/paf/${article.id}`} key={article.name}>
              <img
                src={`${cleAPI}/pafImage/${article.id}/${article.extension}`}
                alt={article.name}
              />
              <div>
                <p>{article.name}</p>
                <p> {article.date}</p>
              </div>
            </Link>
          ))
        : pafArticle.map((article) => (
            <a
              href={`https://portail.polytech-lille.fr/le-studio/?r=${iv}`}
              key={article.name}
            >
              <img
                src={`${cleAPI}/pafImage/${article.id}/${article.extension}`}
                alt={article.name}
              />
              <div>
                <p>{article.name}</p>
                <p> {article.date}</p>
              </div>
            </a>
          ))}
    </div>
  );
}
