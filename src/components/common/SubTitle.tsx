import styled from 'styled-components';
import { ChildrenProps } from '../../types/types';

const SubTitle = ({ children }: ChildrenProps) => {
  return (
    <SubTitleContainer>
      <span className="sub_title">{children}</span>
    </SubTitleContainer>
  );
};

export default SubTitle;

const SubTitleContainer = styled.div`
  font-weight: bold;
  font-family: 'Poppins', 'sans-serif';
  overflow: hidden;

  .sub_title {
    position: relative;
    letter-spacing: 7px;
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    &::after {
      content: '';
      margin-left: 1.563rem;
      position: absolute;
      width: 5000px;
      height: 1px;
      background-color: #7d7789;
      left: 100%;
      top: 50%;
    }
  }
`;
