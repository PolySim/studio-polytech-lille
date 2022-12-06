import React from "react";
import VideoCategoryView from "src/container/Video/VideoCategory";
import { ListVideo } from "src/styled";

export default function ListVideoView(): JSX.Element {
  return (
    <ListVideo>
      <VideoCategoryView />
    </ListVideo>
  );
}
