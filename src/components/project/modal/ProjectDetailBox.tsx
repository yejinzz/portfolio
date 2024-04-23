import styled from 'styled-components';
import { ChildrenProps } from '../../../types/types';
import tw from 'twin.macro';
import SubTitle from '../../common/SubTitle';

interface PContentProps extends ChildrenProps {
  title: string;
}

const ProjectDetail = ({ children, title }: PContentProps) => {
  return (
    <Detailbox>
      <SubTitle>{title}</SubTitle>
      {children}
    </Detailbox>
  );
};

export default ProjectDetail;

const Detailbox = styled.div`
  & > h2 {
    ${tw`
      text-[1.5rem]
    `}
    &::first-letter {
      ${tw`
        text-point
      `}
    }
  }
`;
