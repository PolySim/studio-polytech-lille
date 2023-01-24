import React, { useState, useEffect, useContext } from "react";
import { ListImage } from "src/styled";
import BigImageView from "src/component/Image/bigImage";
import CrossView from "src/component/Image/cross";
import ArrowView from "src/component/Image/arrow";
import { ConnectionContext } from "src/context";
import { MessageConnection } from "src/styled";

const cleAPI = process.env.REACT_APP_API_URL;

export default function JustListImageView({
  images,
}: {
  images: {
    id: number;
    secure: number;
  }[];
}): JSX.Element {
  const [imageClick, setImageClick] = useState<boolean>(false);
  const [imageView, setImageView] = useState<number>(-1);
  const { connected } = useContext(ConnectionContext);

  const onToggleDisplay = (add: boolean) => {
    if (add) {
      if (imageView === images.length - 1) {
        setImageView((curr) => 0);
      } else {
        setImageView((curr) => curr + 1);
      }
    } else {
      if (imageView === 0) {
        setImageView((curr) => images.length - 1);
      } else {
        setImageView((curr) => curr - 1);
      }
    }
  };

  useEffect(() => {
    const keyDownReset = (e: { key: string }) => {
      if (e.key === "Escape") {
        setImageClick(false);
      } else if (e.key === "ArrowRight") {
        // console.log(1);
        onToggleDisplay(true);
      } else if (e.key === "ArrowLeft") {
        onToggleDisplay(false);
      }
    };
    document.addEventListener("keydown", keyDownReset);
    return () => {
      document.removeEventListener("keydown", keyDownReset);
    };
  }, [imageClick, imageView]);

  return (
    <>
      {connected ? (
        <></>
      ) : (
        <MessageConnection>
          Connectez vous pour plus de contenus
        </MessageConnection>
      )}
      <ListImage>
        {connected
          ? images.map((image, i) => (
              <div
                key={image.id}
                onClick={() => {
                  setImageClick(true);
                  setImageView((curr) => i);
                }}
              >
                <img
                  src={`${cleAPI}/getImage/${image.id}`}
                  alt={image.id.toString()}
                />
              </div>
            ))
          : images.map((image, i) =>
              image.secure === 0 ? (
                <div
                  key={image.id}
                  onClick={() => {
                    setImageClick(true);
                    setImageView((curr) => i);
                  }}
                >
                  <img
                    src={`${cleAPI}/getImage/${image.id}`}
                    alt={image.id.toString()}
                  />
                </div>
              ) : (
                <React.Fragment key={`${image.id}`} />
              )
            )}
      </ListImage>
      {imageClick ? (
        <BigImageView
          imageView={imageView}
          images={images}
          connected={connected}
        />
      ) : (
        <></>
      )}
      {imageClick ? <CrossView setImageClick={setImageClick} /> : <></>}
      {imageClick ? (
        <ArrowView
          imageView={imageView}
          numberImage={images.length}
          setImageView={setImageView}
        ></ArrowView>
      ) : (
        <></>
      )}
    </>
  );
}
