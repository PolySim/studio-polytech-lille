import React from "react";

export default function CircleView({
  numeroImage,
  imageAsset,
}: {
  numeroImage: number;
  imageAsset: number;
}): JSX.Element {
  return (
    <svg
      width="18"
      height="18"
      viewBox="-0 -0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fill: numeroImage === imageAsset ? "white" : "transparent",
      }}
    >
      <circle cx="30" cy="30" r="29.5" pathLength="1" />
    </svg>
  );
}
