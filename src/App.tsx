import './App.css';
// import useSmoothScroll from './hooks/useSmoothScroll';
import PreLoader from './components/preLoader';
import styled from 'styled-components';
// import BG from './components/common/BG';
import { useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Social from './components/common/Social';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';

const App = () => {
  // useSmoothScroll();
  useEffect(() => {
    const pushRefresh = () => {
      window.scrollTo(0, 0);
    };
    window.onbeforeunload = pushRefresh;
  }, []);
  return (
    <main>
      <Noise />
      <PreLoader />
      <Navbar />
      <Social />
      <Home />
      <About />
      <Project />
    </main>
  );
};

export default App;

const Noise = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -998;
  background-image: url('/image/noise.gif');
  background-position: 0 0;
  background-size: auto;
  pointer-events: none;
  opacity: 0.02;
  transition: opacity 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  visibility: visible;
`;
