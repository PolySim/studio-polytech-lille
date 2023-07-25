import React from "react";
import { Arrow } from "src/styled";
import { useSwipeable } from "react-swipeable";

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
      if (imageView === numberImage - 1) {
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

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      console.log(1);
      if (eventData.dir === "Left") {
        onToggleDisplay(true);
      } else if (eventData.dir === "Right") {
        onToggleDisplay(false);
      }
    },
  });
  return (
    <Arrow {...handlers}>
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
