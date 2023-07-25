import React, { useState, useEffect, useContext } from "react";
import { Home, Circle } from "src/styled";
import ImageHomeView from "src/component/Home/Image";
import CircleView from "src/component/Home/cercle";
import { useSearchParams } from "react-router-dom";
import getInfoConnected from "src/API/getInfoConnected";
import { ConnectionContext } from "src/context";

export default function HomeView(): JSX.Element {
  const listFourNumber: number[] = [1, 2, 3, 4];
  const [imageAsset, setImageAsset] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const { iv, setConnected, setRank } = useContext(ConnectionContext);
  const onToggleClick = (add: boolean) => {
    if (add) {
      imageAsset === 4 ? setImageAsset(1) : setImageAsset(imageAsset + 1);
    } else {
      imageAsset === 1 ? setImageAsset(4) : setImageAsset(imageAsset - 1);
    }
  };

  useEffect(() => {
    async function getData() {
      const data = await getInfoConnected(
        localStorage.getItem("iv") || "",
        searchParams.get("u") || ""
      );
      if (data.group === -1) {
        console.log("connection failed");
      } else {
        setConnected(true);
        setRank((curr) => data.group);
      }
    }
    if (searchParams.get("u") && iv !== "") {
      getData();
    } else if (iv !== "") {
      localStorage.setItem("iv", iv);
    }
  }, [searchParams, iv]);

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
      <Circle>
        {listFourNumber.map((numero) => (
          <CircleView
            key={numero}
            imageAsset={imageAsset}
            numeroImage={numero}
          />
        ))}
      </Circle>
    </Home>
  );
}
