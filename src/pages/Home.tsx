import styled, { css, keyframes } from 'styled-components';
import ScrollDown from '../components/common/ScrollDown';
// import Background from '../components/common/Background';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Section } from '../styles/CommonStyle';
import HomeBackground from '../components/common/HomeBackground';

const Home = () => {
  const { ref, isInViewport } = useScrollAnimation();

  return (
    <Section>
      <HomeBackground />
      <HomeContent>
        <MovingText ref={ref} isInViewport={isInViewport}>
          <div className="Home__content-title1">
            <h1>YEJIN</h1>
          </div>
          <div className="Home__content-title2">
            <h1>PORTFOLIO</h1>
          </div>
          <div className="Home__content-sub">
            <p>Web Developer Portfolio</p>
          </div>
        </MovingText>
      </HomeContent>
      <ScrollDown />
    </Section>
  );
};

export default Home;

const HomeContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const TextAnimation = keyframes`
  100% {
    transform: translateY(0);
  }
`;

const MovingText = styled.article<{ isInViewport: boolean }>`
  /* border: 1px solid red; */
  display: grid;
  gap: 0.5rem;
  z-index: 3;
  > div {
    width: 100%;
    overflow: hidden;
    & > h1 {
      font-size: 10rem;
      font-weight: 900;
      letter-spacing: 1rem;
      transition:
        font-size 0.3s,
        letter-spacing 0.3s;
    }
  }
  .Home__content-title1 > h1 {
    transform: translateY(200px);
    animation: ${({ isInViewport }) =>
      isInViewport &&
      css`
        ${TextAnimation} 1.5s forwards 0s
      `};
  }

  .Home__content-title2 > h1 {
    transform: translateY(200px);
    animation: ${({ isInViewport }) =>
      isInViewport &&
      css`
        ${TextAnimation} 1.5s forwards 0.5s
      `};
  }

  .Home__content-sub {
    font-family: 'Montserrat', sans-serif;
    height: 50px;
    font-size: 2rem;
    opacity: 0.6;
  }
  .Home__content-sub > p {
    letter-spacing: 1px;
    transform: translateY(100px);
    animation: ${({ isInViewport }) =>
      isInViewport &&
      css`
        ${TextAnimation} 1.5s forwards 1s
      `};
  }

  @media (max-width: 768px) {
    > div {
      & > h1 {
        font-size: 6rem;
      }
    }

    .Home__content-sub {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    > div {
      & > h1 {
        font-size: 3rem;
      }
    }
    .Home__content-title2 {
      margin-top: 15px;
      font-size: 2.5rem;
    }
    .Home__content-sub {
      margin-top: 10px;
      font-size: 14px;
    }
  }
`;
