import React, { useState, useEffect } from "react";
import VideoCategoryView from "src/container/Video/VideoCategory";
import { ListVideo } from "src/styled";
import getYearsVideo from "src/API/getYearsVideo";
import getVideoInfo from "src/API/getVideoInfo";
import { VideoInfoType } from "src/type";
import VideosView from "src/container/Video/ListVideo";

export default function ListVideoView(): JSX.Element {
  const [years, setYears] = useState<number[]>([]);
  const [yearSelected, setYearSelected] = useState<number>(0);
  const [videos, setVideos] = useState<VideoInfoType>({});
  const [categorySelected, setCategorySelected] = useState<number>(1);

  useEffect(() => {
    async function getData() {
      const dataYears = await getYearsVideo();
      const dataVideos = await getVideoInfo();
      setYears((curr) => dataYears);
      setVideos((curr) => dataVideos);
      setYearSelected((curr) => dataYears[0]);
    }
    getData();
  }, []);

  return (
    <ListVideo>
      <VideoCategoryView
        years={years}
        setYearSelected={setYearSelected}
        setCategorySelected={setCategorySelected}
        categorySelected={categorySelected}
      />
      <VideosView videos={videos[yearSelected]} category={categorySelected} />
    </ListVideo>
  );
}
