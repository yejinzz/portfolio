import styled from 'styled-components';
import ScrollDown from '../components/home/ScrollDown';
import { Section as HomeSection } from '../styles/CommonStyle';
import TextCircle from '../components/home/TextCircle';
import useArrayRef from '../hooks/useArrayRef';
import { useGsapHeadLineReveal } from '../hooks/useGsap';
import tw from 'twin.macro';

// interface HomePropsType {
//   homeRef: React.ForwardedRef<HTMLDivElement>;
// }
const Home = ({ firstRef }: { firstRef: React.ForwardedRef<HTMLElement> }) => {
  const [headLineRef, setHeadLineRef] = useArrayRef<HTMLHeadingElement | HTMLParagraphElement>();

  useGsapHeadLineReveal(headLineRef);

  return (
    <HomeSection ref={firstRef} className="h-screen flex justify-center items-center">
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
        // sm:text-[8rem]
      `}
  }
`;

// const CircleOne = styled.div`
//   position: absolute;
//   /* top: 50%; */
//   left: 50%;
//   /* right: 20%; */
//   /* transform: translate(-50%, -50%); */
//   width: 20rem;
//   height: 20rem;
//   background-color: ${({ theme }) => theme.color.point};
//   border-radius: 50%;
// `;

// const CircleTwo = styled.div`
//   position: absolute;
//   /* bottom: -40%;
//   right: -20%; */
//   top: 20%;
//   right: 20%;
//   width: 15rem;
//   height: 15rem;
//   border-radius: 50%;
//   background: rgba(255, 255, 255, 0.25);
//   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
//   backdrop-filter: blur(4px);
//   -webkit-backdrop-filter: blur(4px);
//   border-radius: 50%;
//   border: 1px solid rgba(255, 255, 255, 0.18);
// `;
