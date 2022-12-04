import React, { useState, useEffect } from "react";
import { ImageTeam } from "src/styled";
import { MemberType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default function ImageTeamView({
  member,
  setFullScreen,
}: {
  member: MemberType;
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
        src={`${cleAPI}/imageTeam/${member.id}/${member.extension}`}
        alt={`${member.firstName} ${member.lastName}`}
      />
    </ImageTeam>
  );
}
