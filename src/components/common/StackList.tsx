import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
interface StackListProps {
  stackData: string[];
}
const StackList = ({ stackData }: StackListProps) => {
  return (
    <StackListContainer>
      {stackData.map((item, idx) => (
        <StackItem key={idx}>{item}</StackItem>
      ))}
    </StackListContainer>
  );
};

export default StackList;

const StackListContainer = styled.ul`
  ${tw`
    flex
    flex-wrap
    gap-[0.5rem]
  `}
`;

const StackItem = styled.li`
  ${tw`
    px-3
    py-2
    border
    border-solid 
    rounded-[20px]
    border-[#6c92af]
    text-[#6c92af]
  `}
`;
