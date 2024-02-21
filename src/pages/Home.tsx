import styled from 'styled-components';
import ScrollDown from '../components/home/ScrollDown';
import { Section } from '../styles/CommonStyle';
import TextCircle from '../components/home/TextCircle';
import useArrayRef from '../hooks/useArrayRef';
import { useGsapHeadLineReveal } from '../hooks/useGsap';

const Home = () => {
  const [headLineRef, setHeadLineRef] = useArrayRef<HTMLHeadingElement | HTMLParagraphElement>();

  useGsapHeadLineReveal(headLineRef);

  return (
    <HomeSection id="home">
      <HomeContent>
        <TextCircle>FRONT-END DEVELOPER </TextCircle>
        <HeadLine>
          <h1 ref={setHeadLineRef} className="HeadLine-one">
            Yejin
          </h1>
        </HeadLine>
        <HeadLine>
          <h1 ref={setHeadLineRef} className="HeadLine-two">
            Portfolio
          </h1>
        </HeadLine>
      </HomeContent>

      {/* <CircleOne />
      <CircleTwo /> */}
      <ScrollDown />
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled(Section)`
  /* overflow: hidden; */
  /* height: 100%; */

  .About_path {
    position: absolute;
    left: 0;

    /* left: -1rem; */
  }

  #path_line {
    width: 100vw;
    stroke: ${({ theme }) => theme.color.point};
  }
`;

const HeadLine = styled.div`
  /* position: relative; */
  overflow: hidden;
  .HeadLine-two {
    /* -webkit-text-stroke: 1px var(--color-main-text); */
    text-shadow: ${({ theme }) => theme.shadow.text};
    color: ${({ theme }) => theme.color.mainBg};
    /* color: transparent; */
  }
  & > h1 {
    font-size: 8rem;
    font-family: 'Cabinet', 'sans-serif';
    /* color: ${({ theme }) => theme.color.point}; */
    /* -webkit-text-stroke: 1px var(--color-main-text);
    color: transparent; */
    /* text-transform: uppercase; */
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 5rem;
    }
  }

  & > p {
    font-family: 'Montserrat', 'sans-serif';
    font-weight: 100;
    /* font-size: 2rem; */
    letter-spacing: 1rem;
    color: #8888886b;
  }
`;
const HomeContent = styled.div`
  position: relative;
  /* top: 0; */
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
  }
`;

const CircleOne = styled.div`
  position: absolute;
  /* top: 50%; */
  left: 50%;
  /* right: 20%; */
  /* transform: translate(-50%, -50%); */
  width: 20rem;
  height: 20rem;
  background-color: ${({ theme }) => theme.color.point};
  border-radius: 50%;
`;

const CircleTwo = styled.div`
  position: absolute;
  /* bottom: -40%;
  right: -20%; */
  top: 20%;
  right: 20%;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
