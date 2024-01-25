import { Section } from '../styles/CommonStyle';
import ProjectSlider from '../components/project/ProjectSlider';
import Background from '../components/common/Background';
import styled from 'styled-components';
import { useState } from 'react';
import { ProjectData } from '../data/projectData';
import TitleAnimation from '../components/common/TitleAnimation';

const Project = () => {
  // const [backImgSrc, setBackImgSrc] = useState<string>('');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  return (
    <ProjectBackground>
      <Background url={ProjectData[currentSlideIndex].thumbNail} />
      <TitleAnimation className="Project__Title">Project</TitleAnimation>
      <ProjectSlider setCurrentSlideIndex={setCurrentSlideIndex} />
    </ProjectBackground>
  );
};

export default Project;
const ProjectBackground = styled(Section)`
  overflow: hidden;

  .Project__Title {
    position: absolute;
    top: 5rem;
  }
`;

// const TechStackBannerContainer = styled.div`
//   /* position: absolute; */
//   width: 100%;
//   /* padding: 10rem; */
//   /* height: 100%; */
//   /* display: flex; */
//   /* justify-content: center; */
//   /* align-items: center;
//   flex-direction: column; */
// `;

// const TechStackBanner = styled.img`
//   /* position: relative; */
//   /* top: 100px; */
//   /* width: 90%; */
//   width: 100%;
//   height: 300px;
//   object-fit: cover;
//   filter: contrast(0.5) grayscale(1) brightness(0.55);
//   /* border-radius: 0.4rem; */
//   /* overflow: hidden; */
// `;

// const TechTitle = styled.div`
//   position: relative;
//   top: -20px;
//   /* left: 0; */
//   /* border-radius: 0.4rem; */
//   /* overflow: hidden; */
// `;

// const TechListContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 10rem;
//   width: 100%;

//   .Tech__list-wrapper ul {
//     display: flex;
//     /* justify-content: start; */
//     /* position: relative; */
//     gap: 10rem;
//     & > li {
//       position: relative;
//       /* display: flex;
//       align-items: center;
//       justify-content: center; */
//       /* padding: 5rem; */
//       /* width: 90px; */
//       height: 90px;
//       background-color: #78787886;
//       border: 1px solid rgb(139, 139, 139);
//       box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
//       display: grid;
//       grid-template-columns: 90px 1fr;
//       place-items: center center;
//       transition: 0.3s ease;

//       &:hover {
//         padding-right: 180px;
//       }
//       & > div {
//         position: absolute;
//         left: 120px;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         overflow: hidden;
//         opacity: 0;
//         transition: left 0.3s ease, opacity 0.2s ease;
//         cursor: default;
//       }
//       &:hover div {
//         left: 90px;
//         opacity: 1;
//       }
//     }

//     & > h2 {
//       font-size: 3rem;
//       margin-bottom: 2rem;
//     }
//   }

//   .Tech__stack-icon {
//     position: relative;
//     width: auto;
//     width: 50px;
//     height: 50px;
//   }
// `;
