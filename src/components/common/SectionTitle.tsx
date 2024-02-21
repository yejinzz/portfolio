import { useGsapTitle } from '../../hooks/useGsap';
import styled from 'styled-components';
import useArrayRef from '../../hooks/useArrayRef';
import { memo } from 'react';

const SectionTitle = memo(({ children }: { children: string }) => {
  const [lettersRef, setLettersRef] = useArrayRef<HTMLSpanElement>();

  useGsapTitle(lettersRef);

  return (
    <SectionTitleBox className="text-container">
      {/* <h2 >{children}</h2> */}
      {children.split('').map((letter, index) => (
        <span key={index} ref={setLettersRef}>
          {letter}
        </span>
      ))}
    </SectionTitleBox>
  );
});

export default SectionTitle;

const SectionTitleBox = styled.div`
  /* position: sticky; */
  /* top: 0; */
  width: 100%;

  & > span {
    display: inline-block;
    /* font-size: 3rem; */
    font-size: ${({ theme }) => theme.fontSize.title};
    color: ${({ theme }) => theme.color.title};
    font-family: 'Cabinet', 'sans-serif';

    font-weight: 700;
    /* -webkit-text-stroke: 1px var(--color-main-text);
    color: transparent; */
  }
`;
