import React from "react";
import HeaderView from "src/component/Header";
import FooterView from "src/component/Footer";
import HomeView from "src/component/Home";
import ConnectionVIew from "src/container/connection";

export default function App(): JSX.Element {
  return (
    <>
      <HeaderView />
      <ConnectionVIew />
      <HomeView />
      <FooterView />
    </>
  );
}
