import React, { useState } from "react";
import HeaderView from "src/component/Header";
import FooterView from "src/component/Footer";
import HomeView from "src/component/Home";
import NavBarView from "src/container/NavBar";
import ConnectionView from "src/container/connection";
import { ConnectionContext } from "src/context";
import { Routes, Route } from "react-router-dom";
import AboutView from "src/component/About";
import GoalView from "src/component/About/goal";
import HistoryView from "src/component/About/history";

export default function App(): JSX.Element {
  const [connection, setConnection] = useState<boolean>(false);

  return (
    <>
      <ConnectionContext.Provider value={{ connection, setConnection }}>
        <HeaderView />
        <NavBarView />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/about/goal" element={<GoalView />} />
          <Route path="/about/history" element={<HistoryView />} />
        </Routes>
        <FooterView />
        {connection ? <ConnectionView /> : <></>}
      </ConnectionContext.Provider>
    </>
  );
}