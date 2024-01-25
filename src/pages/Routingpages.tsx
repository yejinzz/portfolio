import { Routes, Route } from "react-router-dom";
// import styled from 'styled-components';
import NotFound from "./NotFound";
import MainPage from "./MainPage";
import Home from "./Home";
// import Playlist from "src/components/playlist/Playlist";
// import PlaylistDetail from "src/pages/PlaylistDetail";
// import MusicDetail from 'src/pages/MusicDetail';

const RoutingPages = () => {
  return (
    <Routes>
      {/* <Route path="/*" element={<NotFound />} />
      <Route path="/" element={<MainPage />} /> */}
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/playlist" element={<Playlist />} />
      <Route path="/playlsit/:plId" element={<PlaylistDetail />} /> */}
    </Routes>
  );
};

export default RoutingPages;
