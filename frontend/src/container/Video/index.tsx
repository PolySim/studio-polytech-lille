import React, { useState, useEffect } from "react";
import VideoCategoryView from "src/container/Video/VideoCategory";
import { ListVideo } from "src/styled";
import getYearsVideo from "src/API/getYearsVideo";

export default function ListVideoView(): JSX.Element {
  const [years, setYears] = useState<number[]>([]);
  const [yearSelected, setYearSelected] = useState<number>(0);

  useEffect(() => {
    async function getData() {
      const data = await getYearsVideo();
      setYears((curr) => data);
    }
    getData();
  }, []);

  return (
    <ListVideo>
      <VideoCategoryView years={years} setYearSelected={setYearSelected} />
    </ListVideo>
  );
}
