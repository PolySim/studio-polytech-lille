import React from "react";
import { EditVideo } from "src/styled";
import { useParams } from "react-router-dom";

export default function EditVideoLinkView(): JSX.Element {
  const { id } = useParams();

  return <EditVideo></EditVideo>;
}
