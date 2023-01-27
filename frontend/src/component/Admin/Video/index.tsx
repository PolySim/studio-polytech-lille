import React from "react";
import { AdminListVideo } from "src/styled";
import CreateVideoView from "src/component/Admin/Video/CreateVideo";
import AllVideoView from "src/component/Admin/Video/listVideos";

export default function AdminVideoView(): JSX.Element {
  return (
    <AdminListVideo>
      <CreateVideoView />
      <AllVideoView />
    </AdminListVideo>
  );
}
