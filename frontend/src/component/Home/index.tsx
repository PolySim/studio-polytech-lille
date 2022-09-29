import React from "react";
import { Home } from "src/styled";
import ImageHomeView from "src/component/Home/Image";

export default function HomeView(): JSX.Element {
  const listFourNumber: number[] = [1, 2, 3, 4];
  return (
    <Home>
      <div>
        <div>
          <svg width="50px" height="50px" viewBox="0 0 24 24">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
          </svg>
        </div>
        <div>
          <svg width="50px" height="50px" viewBox="0 0 24 24">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
          </svg>
        </div>
      </div>
      {listFourNumber.map((numero) => (
        <ImageHomeView key={numero} numeroImage={numero} />
      ))}
    </Home>
  );
}
