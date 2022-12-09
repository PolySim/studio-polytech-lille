import React, { useState, useEffect } from "react";
import getVideoCategory from "src/API/getVideoCategory";
import { VideoCategoryType } from "src/type";

export default function VideoCategoryView({
  years,
  setYearSelected,
  setCategorySelected,
  categorySelected,
}: {
  years: number[];
  setYearSelected: React.Dispatch<React.SetStateAction<number>>;
  setCategorySelected: React.Dispatch<React.SetStateAction<number>>;
  categorySelected: number;
}): JSX.Element {
  const [categories, setCategories] = useState<VideoCategoryType>([]);

  useEffect(() => {
    async function getData() {
      const data = await getVideoCategory();
      setCategories((curr) => data);
    }
    getData();
  }, []);

  const styleSelected = {
    select: {
      backgroundColor: "#eee",
      border: "1px solid #ddd",
      borderRadius: "4px 4px 0 0",
      color: "#333",
    },
    notSelected: {},
  };
  return (
    <div>
      <div>
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => {
              setCategorySelected((curr) => category.id);
            }}
            style={
              categorySelected === category.id
                ? styleSelected.select
                : styleSelected.notSelected
            }
          >
            {category.name}
          </div>
        ))}
      </div>
      <div>
        <select
          onChange={(e) => {
            setYearSelected(parseInt(e.target.value));
          }}
        >
          {years.map((year) => (
            <option key={year} value={year}>{`${year} / ${year + 1}`}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
