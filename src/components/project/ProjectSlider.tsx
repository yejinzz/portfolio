import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import ProjectListItem from './ProjectListItem';
import { ProjectData } from '../../data/projectData';
// import { useState } from 'react';

const ProjectSlider = ({
  setCurrentSlideIndex,
}: {
  setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleAfterChange = (index: number) => {
    setCurrentSlideIndex(index);
  };
  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 500,
    afterChange: handleAfterChange,
    // arrows: false,
  };

  return (
    <SilderGroup>
      <CustomSlider {...settings}>
        {ProjectData.map((data, idx) => (
          <ProjectListItem key={idx} data={data} />
        ))}

        {/* <ProjectListItem imgSrc="/image/project/portfolio.png" />
        <h3>1</h3>
        <ProjectListItem imgSrc="/image/project/portfolio.png" />
        <ProjectListItem imgSrc="/image/project/portfolio.png" />
        <ProjectListItem imgSrc="/image/project/portfolio.png" /> */}
      </CustomSlider>
    </SilderGroup>
  );
};

export default ProjectSlider;

const CustomSlider = styled(Slider)`
  height: 100%;
  width: 100%;

  .slick-list {
    /* width: 300px; */
    /* height: 100%; */
    /* display: flex;
    align-items: center; */
    /* height: 600px;
    margin: auto; */
    /* overflow: visible; */
    /* background-color: #f0f9ff; */
  }
`;
const SilderGroup = styled.div`
  width: 100%;
  opacity: 0;
  animation: opacity 2s forwards;
  /* width: 1000px; */
  /* padding: 30px; */
  /* position: relative; */

  .slick-track {
    height: 500px;
  }
  .slick-slide {
    //각 요소들
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-center {
    z-index: 999;

    figure {
      opacity: 1;
      transform: scale(1);
    }
    img {
      /* border: 2px solid #ccc; */
    }
  }
  @keyframes opacity {
    100% {
      opacity: 1;
    }
  }
`;
