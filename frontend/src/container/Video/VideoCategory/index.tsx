import React, { useState, useEffect } from "react";
import getVideoCategory from "src/API/getVideoCategory";
import { VideoCategoryType } from "src/type";

export default function VideoCategoryView({
  years,
  setYearSelected,
}: {
  years: number[];
  setYearSelected: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const [categories, setCategories] = useState<VideoCategoryType>([]);

  useEffect(() => {
    async function getData() {
      const data = await getVideoCategory();
      setCategories((curr) => data);
    }
    getData();
  }, []);
  return (
    <div>
      <div>
        {categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
      <div>
        <select>
          {years.map((year) => (
            <option
              key={year}
              onClick={() => {
                setYearSelected((curr) => year);
              }}
              value={year}
            >{`${year} / ${year + 1}`}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
