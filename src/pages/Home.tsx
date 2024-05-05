import styled from 'styled-components';
import ScrollDown from '../components/home/ScrollDown';
import { Section } from '../styles/CommonStyle';
import TextCircle from '../components/home/TextCircle';
import useArrayRef from '../hooks/useArrayRef';
import { useGsapHeadLineReveal } from '../hooks/useGsap';
import tw from 'twin.macro';
// import { ForwardedRef } from 'react';
import { TabsProps } from '../types/types';

const Home = ({ tabs }: { tabs: TabsProps[] }) => {
  const [headLineRef, setHeadLineRef] = useArrayRef<HTMLHeadingElement | HTMLParagraphElement>();

  useGsapHeadLineReveal(headLineRef);
  // console.log(tabs[0].isTarget);
  return (
    <HomeSection ref={tabs[0].targetRef}>
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
    h-[5rem]
    sm:h-[7rem]
    lg:h-[9rem]
  `}

  & > h1 {
    ${tw`
      text-[4rem]
      sm:text-[6rem]
      lg:text-[8rem]
    `}
  }
  .HeadLine-one {
    ${tw`
        text-point
      `}
  }
`;
