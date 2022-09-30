import React, { useState, useEffect } from "react";
import { Home } from "src/styled";
import ImageHomeView from "src/component/Home/Image";

export default function HomeView(): JSX.Element {
  const listFourNumber: number[] = [1, 2, 3, 4];
  const [imageAsset, setImageAsset] = useState<number>(1);

  const onToggleClick = (add: boolean) => {
    console.log(imageAsset);
    if (add) {
      imageAsset === 4 ? setImageAsset(1) : setImageAsset(imageAsset + 1);
    } else {
      imageAsset === 1 ? setImageAsset(4) : setImageAsset(imageAsset - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => onToggleClick(true), 6000);
    return () => clearInterval(interval);
  }, [imageAsset]);

  return (
    <Home>
      <div>
        <div onClick={() => onToggleClick(false)}>
          <svg width="50px" height="50px" viewBox="0 0 24 24">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
          </svg>
        </div>
        <div onClick={() => onToggleClick(true)}>
          <svg width="50px" height="50px" viewBox="0 0 24 24">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
          </svg>
        </div>
      </div>
      {listFourNumber.map((numero) => (
        <ImageHomeView
          key={numero}
          imageAsset={imageAsset}
          numeroImage={numero}
        />
      ))}
    </Home>
  );
}
