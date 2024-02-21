import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  /* max-width: 100vw; */
  min-height: 100vh;
  padding: 4rem;
  /* max-width: ${({ theme }) => theme.maxWidth}; */
  margin: 0 auto;
  transition: padding 0.3s;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const MaxWidthContainer = styled.div`
  width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  transition: padding 0.3s;
  /* FUNCTION pc */
`;

// COMPONENT section title - sound only
const SectionCategoryTitle = styled.h2`
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
  text-indent: -99999;
  pointer-events: none;
`;

// COMPONENT button
const Button = styled.button<{ width?: string }>`
  font-family: 'Pretendard', 'sans-serif';
  font-size: ${({ theme }) => theme.fontSize.body.md};
  font-weight: 700;
  cursor: pointer;
  min-width: ${(props) => (props.width ? props.width : '18rem')};
  padding: 0 4.8rem;
  height: 5.6rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.color.point40};
  /* border: 0.2rem solid ${(props) => props.theme.color.point}; */

  &:hover {
    background-color: ${({ theme }) => theme.color.point};
    color: ${({ theme }) => theme.color.main};
  }

  @media (${({ theme }) => theme.windowSize['mb-l']}) {
    width: 100%;
    min-width: unset;
  }
`;

// COMPONENT profile image container
const ProfileImgContainer = styled.div`
  width: 34rem;
  position: relative;
  overflow: hidden;
  border-radius: 0.4rem;
  flex-shrink: 0;

  @media (max-width: 460px) {
    width: 100%;
    height: auto;
  }
`;

//COMPONENT title word
const WordEffectGlow = styled.span<{ delay?: string }>`
  @keyframes anime_textup {
    0% {
      top: 0;
      text-shadow: ${({ theme }) => theme.color.text} 0rem 0rem 0rem;
    }
    20% {
      /* top: -0.8rem; */
      text-shadow: ${({ theme }) => theme.color.text} 0rem 0rem 2rem;
    }
    40% {
      top: 0;
      text-shadow: ${({ theme }) => theme.color.text} 0rem 0rem 0rem;
    }
    60% {
      top: 0;
    }
    80% {
      top: 0;
    }
    100% {
      top: 0;
    }
  }
  position: relative;
  animation: anime_textup 6s infinite;
  animation-delay: ${(props) => (props.delay ? props.delay : '0s')};
`;

export { Section, SectionCategoryTitle, MaxWidthContainer, Button, ProfileImgContainer, WordEffectGlow };
