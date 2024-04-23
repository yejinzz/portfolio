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
    h-20 overflow-hidden text-[5rem] font-montserrat
  `}
  span {
    ${tw`
      inline-block text-white
    `}
  }
`;
