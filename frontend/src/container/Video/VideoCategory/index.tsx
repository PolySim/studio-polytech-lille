import React, { useState, useEffect } from "react";
import getVideoCategory from "src/API/getVideoCategory";
import { VideoCategoryType } from "src/type";

export default function VideoCategoryView(): JSX.Element {
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
      <div></div>
    </div>
  );
}
