import styled, { css, keyframes } from 'styled-components';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { UrlProps } from '../../types/types';

const MovingImg = ({ url }: UrlProps) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <ProfileImgContainer ref={ref} isInViewport={isInViewport}>
      <img src={url} alt="profile" />
    </ProfileImgContainer>
  );
};

export default MovingImg;
const pullDownAnimation = keyframes`

  100% {
    /* height: 100%; */
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    /* border-radius: 100px 0px 100px 0px; */
            opacity: 1;
  }
`;

const ProfileImgContainer = styled.div<{ isInViewport: boolean }>`
  /* border-radius: 0.4rem;
  position: relative;
  width: 100%;
  height: 100%; */

  > img {
    filter: grayscale(0.2);
    /* width: 100%;
    height: auto; */
    display: block;
    width: 36rem;
    height: 100%;
    /* position: relative; */
    /* overflow: hidden; */
    border-radius: 0.4rem;
    /* flex-shrink: 0; */
    /* min-width: 100%;
    max-width: 100vw;
    min-height: 100%;
    max-height: 100vh; */
    /* padding: 10rem; */
    box-shadow: 5px 10px 20px rgb(0, 0, 0, 0.3);
    transition: 0.3s ease-in-out;
    /* height: 0%; */

    clip-path: polygon(0 0, 100% 0, 100% 0, 0% 0);
    /* border-radius: 100px 0px 100px 0px; */
    opacity: 0;

    animation: ${({ isInViewport }) =>
      isInViewport &&
      css`
        ${pullDownAnimation} 1.5s forwards 0.5s
      `};
    @media (max-width: 768px) {
      /* display: block; */
      width: 25rem;
    }
  }
  /* @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  } */
`;

// const ImageMoving = styled.img``;
