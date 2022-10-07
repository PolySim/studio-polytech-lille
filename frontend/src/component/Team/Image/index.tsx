import React, { useState, useEffect } from "react";
import { ImageTeam } from "src/styled";

export default function ImageTeamView({
  name,
  setFullScreen,
}: {
  name: string;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const onToggleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", onToggleResize);
  }, [width, height]);

  return (
    <ImageTeam
      onClick={() => {
        setFullScreen(false);
      }}
    >
      <img
        style={
          width * 1.5 < height
            ? {
                width: `${0.97 * width}px`,
                height: "auto",
              }
            : {
                height: `${0.97 * height}px`,
                width: "auto",
              }
        }
        src={require("./servan.jpeg")}
        alt="Servan"
      />
    </ImageTeam>
  );
}
