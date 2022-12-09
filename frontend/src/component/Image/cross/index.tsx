import React from "react";
import { Cross } from "src/styled";

export default function CrossView({
  setImageClick,
}: {
  setImageClick: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <Cross>
      <div
        onClick={() => {
          setImageClick(false);
        }}
      >
        <svg
          aria-label="Fermer"
          color="#ddd"
          fill="#ddd"
          height="40"
          role="img"
          viewBox="0 0 24 24"
          width="40"
        >
          <polyline
            fill="none"
            points="20.643 3.357 12 12 3.353 20.647"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          ></polyline>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            x1="20.649"
            x2="3.354"
            y1="20.649"
            y2="3.354"
          ></line>
        </svg>
      </div>
    </Cross>
  );
}
