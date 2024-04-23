import styled from 'styled-components';
import ScrollDown from '../components/home/ScrollDown';
import { Section } from '../styles/CommonStyle';
import TextCircle from '../components/home/TextCircle';
import useArrayRef from '../hooks/useArrayRef';
import { useGsapHeadLineReveal } from '../hooks/useGsap';
import tw from 'twin.macro';

const Home = ({ firstRef }: { firstRef: React.ForwardedRef<HTMLElement> }) => {
  const [headLineRef, setHeadLineRef] = useArrayRef<HTMLHeadingElement | HTMLParagraphElement>();

  useGsapHeadLineReveal(headLineRef);

  return (
    <HomeSection ref={firstRef}>
      <HomeContent>
        <TextCircle>FRONT-END DEVELOPER </TextCircle>
        <HeadLine>
          <h1 ref={setHeadLineRef} className="HeadLine-one">
            Yejin's
          </h1>
        </HeadLine>
        <HeadLine>
          <h1 ref={setHeadLineRef} className="HeadLine-two">
            Portfolio
          </h1>
        </HeadLine>
      </HomeContent>
      <ScrollDown />
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled(Section)`
  ${tw`
    h-screen
    flex
    justify-center
    items-center
  `}
`;
const HomeContent = styled.div`
  ${tw`
    relative
  `}
`;

const HeadLine = styled.div`
  ${tw`
    overflow-hidden
    h-[6rem]
    sm:h-[9rem]
  `}

  & > h1 {
    ${tw`
      text-[5rem]
      sm:text-[8rem]
    `}
  }
  .HeadLine-one {
    ${tw`
        text-point
      `}
  }
`;
