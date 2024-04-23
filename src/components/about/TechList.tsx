import { forwardRef } from 'react';
import styled from 'styled-components';
import SubTitle from '../common/SubTitle';
import { StackData } from '../../data/aboutData';
import tw from 'twin.macro';
import { StackProps } from '../../types/styleTypes';

const TechList = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <TechListContainer ref={ref}>
      <SubTitle>Tech Stack</SubTitle>
      <div className="Tech__list-container">
        {Object.entries(StackData.stacks).map(([key, stack], idx) => (
          <div key={idx} className="Tech__list-wrap" aria-label={`${key} Tech list`}>
            <h3>{key}</h3>

            <ul>
              {stack.map((item, itemIdx) => (
                <StackItem key={itemIdx} aria-label={`${item}`} stack={item}>
                  <img className="About__tech-icon" src={`/tech/${item}.svg`} alt={item} />
                </StackItem>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </TechListContainer>
  );
});

export default TechList;

const TechListContainer = styled.div`
  .Tech__list-container {
    ${tw`
      flex
      flex-col
      gap-[1rem]
      mx-[1rem]
      my-[2rem]
    `}
  }

  .Tech__list-wrap {
    > ul {
      ${tw`
          flex
          gap-[1rem]
          flex-wrap
        `}
    }
    > h3 {
      ${tw`
          flex
          gap-[1rem]
          flex-wrap
          mb-[1rem]
        `}
    }
  }

  .About__tech-icon {
    ${tw`
      flex
      gap-[1rem]
      flex-wrap
    `}
  }
`;
const StackItem = styled.li<StackProps>`
  ${tw`
    relative
    flex
    items-center
    justify-center
    w-[60px]
    h-[60px]
    p-[0.7rem]
    rounded-lg
    bg-gray50
    shadow-default
    // shadow-[2px 2px 10px rgba(0,0,0,0.3)]
  `}
  &::before {
    ${tw`
      absolute
      top-0
      left-0
      w-full
      h-full
      text-center
      flex
      items-center
      justify-center
      bg-[#000000eb]
      rounded-lg
      text-[0.8rem]
      text-[#fff]
      opacity-0
      transition-opacity
      duration-300
      ease-in-out
    `}
    content: ${({ stack }) => `'${stack}'`};
  }

  &:hover::before {
    ${tw`
      opacity-100
    `}
  }
`;
