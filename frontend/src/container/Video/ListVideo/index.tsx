import React from "react";

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
  return (
    <div>
      {videos ? (
        videos.map((video) =>
          category === video.category_id ? (
            <div key={video.id}>
              <img
                src={`${cleAPI}/videoImage/${video.id}/${video.extension}`}
                alt={`${video.title}`}
              />
              <div>{video.title}</div>
            </div>
          ) : (
            <React.Fragment key={video.id} />
          )
        )
      ) : (
        <></>
      )}
    </div>
  );
}
