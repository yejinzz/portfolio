import styled from 'styled-components';
import { ChildrenProps } from '../../types/types';
import tw from 'twin.macro';

const SubTitle = ({ children }: ChildrenProps) => {
  return (
    <SubTitleContainer>
      <span className="sub_title">{children}</span>
    </SubTitleContainer>
  );
};

export default SubTitle;

const SubTitleContainer = styled.h2`
  ${tw`
    overflow-hidden
    font-poppins
  `}

  .sub_title {
    ${tw`
      relative
      tracking-[7px]
      text-[1.5rem]
      // text-gray
      uppercase
      font-bold
    `}
    &::after {
      ${tw`
        absolute
        left-full
        top-1/2
        w-[4000px]
        h-px
        content-['']
        ml-6
        bg-gray
      `}
    }
  }
`;
