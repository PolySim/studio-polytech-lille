import React, { useState, useEffect } from "react";
import getAllVideo from "src/API/getAllVideos";
import { Link } from "react-router-dom";
import { AllVideosType } from "src/type";
import { AllVideo } from "src/styled";

const cleAPI = process.env.REACT_APP_API_URL;

export default function AllVideoView(): JSX.Element {
  const [videos, setVideos] = useState<AllVideosType>([]);

  useEffect(() => {
    async function getData() {
      const data = await getAllVideo();
      setVideos((curr) => data);
    }

    if (videos.length === 0) {
      getData();
    }
  }, []);

  return (
    <AllVideo>
      <div>
        <div>Couverture</div>
        <div>Titre</div>
        <div>Date</div>
        <div>Vues</div>
        <div>Sec</div>
        <div>Categorie</div>
        <div></div>
      </div>
      {videos.map((video) => (
        <div key={video.id}>
          <div>
            <img
              src={`${cleAPI}/videoImage/${video.id}/${video.extension}`}
              alt={video.title}
            />
          </div>
          <div>{video.title}</div>
          <div>{video.date}</div>
          <div>{video.view}</div>
          <div>{video.secure}</div>
          <div>{video.category}</div>
          <div></div>
        </div>
      ))}
    </AllVideo>
  );
}
