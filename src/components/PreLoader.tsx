import styled from 'styled-components';
import { useGsapPreLoader } from '../hooks/useGsap';
import useArrayRef from '../hooks/useArrayRef';
import tw from 'twin.macro';

const PreLoader = () => {
  const [lettersRef, setLettersRef] = useArrayRef<HTMLSpanElement>();
  const text = "Yejin's Portfolio";

  useGsapPreLoader(lettersRef);

  return (
    <PreLoaderContainer className="preloader">
      <PreLoaderText>
        {text.split('').map((letter, index) => (
          <span key={index} ref={setLettersRef}>
            {letter}
          </span>
        ))}
      </PreLoaderText>
    </PreLoaderContainer>
  );
};

export default PreLoader;

const PreLoaderContainer = styled.div`
  ${tw`
    h-screen
    w-full
    bg-black
    fixed
    flex
    items-center
    justify-center
    z-50
`}
`;

const PreLoaderText = styled.div`
  ${tw`
   
    overflow-hidden
    font-poppins
    text-[3rem]
    h-[3.3rem]
    md:h-[5.6rem]
    md:text-[5rem]
  `}
  span {
    ${tw`
      inline-block
      // block
    `}
  }
`;
