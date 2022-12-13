import React, { useState, useEffect } from "react";
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
import ContactView from "src/container/About/contact";
import TeamView from "src/component/Team";
import AlbumView from "src/container/Album";
import ListImageView from "src/component/Image";
import PafView from "src/container/PAF";
import ArticleView from "src/container/PAF/Article";
import ListVideoView from "src/container/Video";
import VideoView from "src/container/Video/VideoView";
import ListNewsView from "src/container/News";
import LegalView from "src/component/legal";

export default function App(): JSX.Element {
  const [connection, setConnection] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);
  const [iv, setIv] = useState<string>("");
  const [rank, setRank] = useState<number>(0);

  useEffect(() => {
    const getRandomInt16Bytes: (max: number) => string = (max) => {
      const getRandomInt: () => string = () =>
        Math.floor(Math.random() * max).toString();
      const r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6].map((i) =>
        getRandomInt()
      );
      return r.join("");
    };
    setIv((curr) => getRandomInt16Bytes(16));
  }, []);

  return (
    <>
      <ConnectionContext.Provider
        value={{
          connection,
          setConnection,
          connected,
          setConnected,
          iv,
          rank,
          setRank,
        }}
      >
        <HeaderView />
        <NavBarView />
        <Routes>
          <Route path="/*" element={<HomeView />} />
          <Route path="/legal" element={<LegalView />} />
          <Route path="/team" element={<TeamView />} />
          <Route path="/news" element={<ListNewsView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/album" element={<AlbumView />} />
          <Route path="/album/:id" element={<ListImageView />} />
          <Route path="/videos" element={<ListVideoView />} />
          <Route path="/videos/:id" element={<VideoView />} />
          <Route path="/paf" element={<PafView />} />
          <Route path="/paf/:id" element={<ArticleView />} />
          <Route path="/about/goal" element={<GoalView />} />
          <Route path="/about/history" element={<HistoryView />} />
          <Route path="/about/contact" element={<ContactView />} />
        </Routes>
        <FooterView />
        {connection ? <ConnectionView /> : <></>}
      </ConnectionContext.Provider>
    </>
  );
}
