import styled from 'styled-components';
import tw from 'twin.macro';
// import PreLoader from './components/PreLoader';
import Navbar from './components/common/Navbar';
import Social from './components/common/Social';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Education from './pages/Education';
import Contact from './pages/Contact';
import useMoveScroll from './hooks/useMoveScroll';

const Noise = styled.div`
  ${tw`
    w-screen 
    h-screen 
    fixed 
    z-0 
    bg-main
    bg-auto
    opacity-[0.03]
    translate-x-0
    translate-y-0
`}
`;
const App = () => {
  const tabs = [
    useMoveScroll('Home'),
    useMoveScroll('About'),
    useMoveScroll('Projects'),
    useMoveScroll('Education'),
    useMoveScroll('Contact'),
  ];

  return (
    <main>
      <Noise />
      {/* <PreLoader /> */}
      <Navbar tabs={tabs} />
      <Social />
      <Home tabs={tabs} />
      <About tabs={tabs} />
      <Project tabs={tabs} />
      <Education tabs={tabs} />
      <Contact tabs={tabs} />
    </main>
  );
};

export default App;
