import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnectionContext } from "src/context";

const cleAPI = process.env.REACT_APP_API_URL;

export default function VideosView({
  videos,
  category,
}: {
  videos: {
    id: number;
    category_id: number;
    title: string;
    extension: string;
    secure: number;
  }[];
  category: number;
}): JSX.Element {
  const { connected } = useContext(ConnectionContext);
  const style = {
    width: "100%",
    minHeight: "20px",
    padding: "15px",
    backgroundColor: "#d9edf7",
    color: "#31708f",
    border: "1px solid #bce8f1",
    borderRadius: "4px",
    fontSize: "14px",
  };

  return (
    <div>
      {videos ? (
        videos.some(
          (video) => video.category_id === category && video.secure === 0
        ) ? (
          videos.map((video) =>
            category === video.category_id ? (
              connected ? (
                <Link to={`${video.id}`} key={video.id}>
                  <img
                    src={`${cleAPI}/videoImage/${video.id}/${video.extension}`}
                    alt={`${video.title}`}
                  />
                  <div>{video.title}</div>
                </Link>
              ) : video.secure === 0 ? (
                <Link to={`${video.id}`} key={video.id}>
                  <img
                    src={`${cleAPI}/videoImage/${video.id}/${video.extension}`}
                    alt={`${video.title}`}
                  />
                  <div>{video.title}</div>
                </Link>
              ) : (
                <React.Fragment key={video.id} />
              )
            ) : (
              <React.Fragment key={video.id} />
            )
          )
        ) : (
          <div style={style}>
            Pas de vidéos pour cette année et pour cette catégorie...
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
}
