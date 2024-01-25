import MovingImg from '../components/about/MovingImg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styled, { css, keyframes } from 'styled-components';
import { StackData } from '../data/aboutData';
import { Section } from '../styles/CommonStyle';
import SubTitle from '../components/common/SubTitle';

const About = () => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <AboutContainer>
      <MovingImg url="/image/profile-img.jpg" />
      <AboutWrapper>
        <ProfileSection ref={ref} isInViewport={isInViewport}>
          <SubTitle>About me</SubTitle>
          <div className="About__desc">
            <strong>“ Do The Best ”</strong>
            <br />제 모토이자 저를 가장 잘 표현할 수 있는 문장입니다.
            <br />
            작고 사소한 일 일지라도, 주어진 일에는 최선을 다하는 사람입니다.
            <br />
            개발에 있어서도 마찬가지입니다.
            <br />
            최고의 결과물을 만들어내기 위해 최선을 다할 것이며,
            <br />
            사용자 중심의 개발과 세심한 UI 디자인을 통해 더 나은 솔루션을 창출해 나가겠습니다.
          </div>
        </ProfileSection>
        <TechListContainer ref={ref} isInViewport={isInViewport}>
          <SubTitle>Tech Stack</SubTitle>
          <div className="Tech__list-container">
            {Object.entries(StackData.stacks).map(([key, stack], idx) => (
              <div key={idx} className="Tech__list-wrapper" aria-label={`Tech__${key}-list`}>
                <h2>- {key}</h2>
                <ul>
                  {stack.map((item, itemIdx) => (
                    <li key={itemIdx} aria-label={`${item}`}>
                      <img className="About__tech-icon" src={`/tech/${item}.svg`} alt={item}></img>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TechListContainer>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;

const fadeInAnimation = keyframes`
0% {
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

const AboutContainer = styled(Section)`
  /* display: flex;
  align-items: center; */
  /* overflow: hidden; */
  gap: 5rem;
  /* color: #989898; */
  @media (max-width: 768px) {
    display: block;
  }
`;

const AboutWrapper = styled.div`
  /* display: grid; */
  /* position: relative;
  height: 100%;

  grid-template-rows: 1fr 1fr; */
  /* grid-template-rows: 1fr 1fr; */
  /* width: 100%; */
  @media (max-width: 768px) {
  }
`;

const ProfileSection = styled.div<{ isInViewport: boolean }>`
  position: relative;
  opacity: 0;
  width: 100%;
  animation: ${({ isInViewport }) =>
    isInViewport &&
    css`
      ${fadeInAnimation} 1s forwards 1.2s
    `};

  .About__desc {
    font-size: 1.6rem;
    line-height: 1.8;
    font-weight: 400;
    margin: 2rem;
    word-break: keep-all;
    /* opacity: 0; */

    & strong {
      width: fit-content;
      background-color: #00000085;
      /* border-radius: 50px; */
      padding: 0 0.8rem;
      display: inline-block;
      margin-bottom: 1rem;
      font-size: 2.3rem;
      font-family: 'Montserrat', 'sans-serif';
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
  }
`;

const TechListContainer = styled.div<{ isInViewport: boolean }>`
  opacity: 0;
  animation: ${({ isInViewport }) =>
    isInViewport &&
    css`
      ${fadeInAnimation} 1s forwards 2s
    `};

  .Tech__list-container {
    display: grid;
    gap: 1rem;
    margin: 2rem;
  }

  .Tech__list-wrapper {
    > ul {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;

      & > li {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: #78787886;
        border: 1px solid rgb(139, 139, 139);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
        place-items: center center;
        transition: 0.3s ease;
      }
    }

    > h2 {
      /* width: fit-content; */
      padding: 0.85rem;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0);
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }
  }

  .About__tech-icon {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    /* align-items: left;
    min-height: 100%; */
  }

  @media (max-width: 480px) {
  }
`;
