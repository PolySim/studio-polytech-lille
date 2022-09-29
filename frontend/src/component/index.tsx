import React from "react";
import HeaderView from "src/component/Header";
import FooterView from "src/component/Footer";
import { Main } from "src/styled";

export default function App(): JSX.Element {
  return (
    <>
      <HeaderView />
      <Main />
      <FooterView />
    </>
  );
}
