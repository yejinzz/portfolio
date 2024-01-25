// import React from "react";
import styled from 'styled-components';
import Home from './Home';
import About from './About';
// import Project from './Project';
// import { SectionsContainer, Section, Header, Footer } from "react-fullpage";
// import FullPageScroll from "../components/FullPageScroll";
// const Home = React.lazy(() => import("./Home"));
// const About = React.lazy(() => import("./About"));
// const TechStack = React.lazy(() => import("./TechStack"));

const MainPage = () => {
  return (
    <MainSection>
      <Home />
      <About />
      {/* <Project /> */}
    </MainSection>
  );
};

export default MainPage;

const MainSection = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
