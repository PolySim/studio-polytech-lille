import React, { useState, useEffect } from "react";
import { NewsInfoType } from "src/type";
import getNewsInfo from "src/API/getNewsInfo";
import { Link } from "react-router-dom";
import { News } from "src/styled";

const cleAPI = process.env.REACT_APP_API_URL;

export default function ListNewsView(): JSX.Element {
  const [newsList, setNewsList] = useState<NewsInfoType>([]);

  useEffect(() => {
    async function getData() {
      const data = await getNewsInfo();
      setNewsList((curr) => data);
    }
    getData();
  }, []);

  return (
    <News>
      {newsList.length === 0 ? (
        <></>
      ) : (
        newsList.map((news) => (
          <div key={news.id}>
            <div>
              <img
                src={`${cleAPI}/newsImage/${news.id}/${news.extension}`}
                alt={`${news.title}`}
              />
              <div>{news.title}</div>
            </div>
            <div>{news.text}</div>
            <Link to={`${news.id}`}>En savoir plus :</Link>
          </div>
        ))
      )}
    </News>
  );
}
