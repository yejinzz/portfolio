// import { useEffect } from 'react';
import styled from 'styled-components';
import { useGsapPreLoader } from '../hooks/useGsap';
import useArrayRef from '../hooks/useArrayRef';

const PreLoader = () => {
  const [lettersRef, setLettersRef] = useArrayRef<HTMLSpanElement>();
  const text = "Yejin's Portfolio";

  useGsapPreLoader(lettersRef);

  return (
    <PreLoaderContainer className="preloader">
      <PreLoaderText className="text-container">
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
  height: 100vh;
  width: 100%;
  background: #000000;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  /* .ball {
    position: absolute;
    top: -50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: #f8f0e5;
  } */
`;

const PreLoaderText = styled.div`
  height: 70px;
  overflow: hidden;
  & > span {
    display: inline-block;
  }
`;
