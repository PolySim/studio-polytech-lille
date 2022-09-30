import React from "react";
import HeaderView from "src/component/Header";
import FooterView from "src/component/Footer";
import HomeView from "src/component/Home";
import NavBarView from "src/container/NavBar";
import ConnectionView from "src/container/Connection";

export default function App(): JSX.Element {
  return (
    <>
      <HeaderView />
      <NavBarView />
      <HomeView />
      <FooterView />
      <ConnectionView />
    </>
  );
}
