import React from "react";

export default function NavBarAlbumView({
  years,
  yearSelected,
  setAlbumSelected,
}: {
  years: string[];
  yearSelected: string;
  setAlbumSelected: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  const selectedStyle = {
    select: {
      color: "#000",
      border: "1px solid #ddd",
      borderBottom: "none",
      borderRadius: "4px 4px 0 0",
    },
    notSelect: {},
  };

  return (
    <div>
      {years.map((year) => (
        <div
          key={year}
          onClick={() => {
            setAlbumSelected((curr) => year);
          }}
          style={
            year === yearSelected
              ? selectedStyle.select
              : selectedStyle.notSelect
          }
        >
          <p>{`${parseInt(year) - 1} / ${year}`}</p>
        </div>
      ))}
    </div>
  );
}
