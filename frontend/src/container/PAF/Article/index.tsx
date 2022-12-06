import React, { useState, useEffect } from "react";
import getArticlePafInfo from "src/API/getArticlePafInfo";
import { PafArticleInfoType } from "src/type";
import { PAFArticle } from "src/styled";
import { useParams } from "react-router-dom";

const cleAPI = process.env.REACT_APP_API_URL;

export default function ArticleView(): JSX.Element {
  const param = useParams();
  const { id } = param;
  const [article, setArticle] = useState<PafArticleInfoType>({
    extension: "",
    name: "",
    views: 0,
  });

  useEffect(() => {
    async function getData() {
      if (id) {
        const data = await getArticlePafInfo(id);
        setArticle((curr) => data);
      }
    }
    getData();
  }, [id]);

  return (
    <PAFArticle>
      <div>
        <div>{article.name}</div>
        <div>{article.views} vues</div>
      </div>

      {article.extension === "" ? (
        <></>
      ) : window.innerWidth < 930 ? (
        <iframe
          title={`${article.name}`}
          src={`${cleAPI}/pafArticle/${id}/${article.extension}#view=fitH&navpanes=0`}
        ></iframe>
      ) : (
        <iframe
          title={`${article.name}`}
          src={`${cleAPI}/pafArticle/${id}/${article.extension}#view=fitF&navpanes=0`}
        ></iframe>
      )}
    </PAFArticle>
  );
}
