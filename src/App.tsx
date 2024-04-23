import PreLoader from './components/PreLoader';
import styled from 'styled-components';
import Navbar from './components/common/Navbar';
import Social from './components/common/Social';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import tw from 'twin.macro';
import Education from './pages/Education';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Contact from './pages/Contact';

const Noise = styled.div`
  ${tw`
    w-screen 
    h-screen 
    fixed 
    z-0 
    bg-main
    bg-auto
    opacity-[0.03]
    top-0
    right-0
    bottom-0
    left-0
`}
`;
const App = () => {
  const { isInViewport, firstRef, LastRef } = useScrollAnimation();

  return (
    <main>
      <Noise />
      <PreLoader />
      <Navbar />
      <Social isInViewport={isInViewport} />
      <Home firstRef={firstRef} />
      <About />
      <Project />
      <Education LastRef={LastRef} />
      <Contact LastRef={LastRef} />
    </main>
  );
};

export default App;
