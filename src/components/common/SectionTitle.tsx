import { useGsapTitle } from '../../hooks/useGsap';
import styled from 'styled-components';
import useArrayRef from '../../hooks/useArrayRef';
import tw from 'twin.macro';

const SectionTitle = ({ children }: { children: string }) => {
  const [lettersRef, setLettersRef] = useArrayRef<HTMLSpanElement>();

  useGsapTitle(lettersRef);

  return (
    <Title>
      {children.split('').map((letter, index) => (
        <span key={index} ref={setLettersRef}>
          {letter}
        </span>
      ))}
    </Title>
  );
};

export default SectionTitle;

const Title = styled.h1`
  ${tw`
    mb-[5rem]
    w-full
  `}
  &> span:first-child {
    ${tw`
        text-point
      `}
  }
  & > span {
    ${tw`
      inline-block
      text-[3rem]
      font-poppins
      font-bold
    `}
  }
`;
