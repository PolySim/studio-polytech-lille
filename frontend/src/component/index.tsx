import React, { useState } from "react";
import HeaderView from "src/component/Header";
import FooterView from "src/component/Footer";
import HomeView from "src/component/Home";
import NavBarView from "src/container/NavBar";
import ConnectionView from "src/container/Connection";
import { ConnectionContext } from "src/context";

export default function App(): JSX.Element {
  const [connection, setConnection] = useState<boolean>(false);

  return (
    <>
      <ConnectionContext.Provider value={{ connection, setConnection }}>
        <HeaderView />
        <NavBarView />
        <HomeView />
        <FooterView />
        {connection ? <ConnectionView /> : <></>}
      </ConnectionContext.Provider>
    </>
  );
}
