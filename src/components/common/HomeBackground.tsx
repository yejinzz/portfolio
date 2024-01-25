import React from 'react';
import styled from 'styled-components';

const HomeBackground = () => {
  return (
    <div>
      <Video autoPlay loop muted>
        <source src="/video/home-bg.mp4" type="video/mp4" />
      </Video>
    </div>
  );
};

export default HomeBackground;
const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
