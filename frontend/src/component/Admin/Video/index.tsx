import React from "react";
import { AdminListVideo } from "src/styled";
import CreateVideoView from "src/component/Admin/Video/CreateVideo";

export default function EditVideoView(): JSX.Element {
  return (
    <AdminListVideo>
      <CreateVideoView />
    </AdminListVideo>
  );
}
