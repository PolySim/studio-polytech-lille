import React from "react";
import { Arrow } from "src/styled";

export default function ArrowView({
  numberImage,
  imageView,
  setImageView,
}: {
  numberImage: number;
  imageView: number;
  setImageView: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const onToggleDisplay = (add: boolean) => {
    if (add) {
      if (imageView - 1 === numberImage) {
        setImageView((curr) => 0);
      } else {
        setImageView((curr) => curr + 1);
      }
    } else {
      if (imageView === 0) {
        setImageView((curr) => numberImage - 1);
      } else {
        setImageView((curr) => curr - 1);
      }
    }
  };
  return (
    <Arrow>
      <button>
        <div onClick={() => onToggleDisplay(false)}>
          <svg width="50px" height="50px" viewBox="0 0 24 24">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
          </svg>
        </div>
      </button>
      <button>
        <div onClick={() => onToggleDisplay(true)}>
          <svg width="50px" height="50px" viewBox="0 0 24 24">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
          </svg>
        </div>
      </button>
    </Arrow>
  );
}
