import React from 'react';
import styled from 'styled-components';
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StackItem = styled.li`
  padding: 0.5rem 1rem;
  border: 0.5px solid #6b6b6b;
  border-radius: 20px;
`;
