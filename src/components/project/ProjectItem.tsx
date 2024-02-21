import styled from 'styled-components';
import { projectDataProps } from '../../types/types';
import { useGsapProjectReveal } from '../../hooks/useGsap';
import { RefObject, memo, useRef } from 'react';
import Button from './Button';
import StackList from '../common/StackList';
// import ProjectSlider from './ProjectSlider';

interface ProjectListItemProps {
  data: projectDataProps;
  onClickMoreView: (id: number) => void;
}

const ProjectItem = memo(({ data, onClickMoreView }: ProjectListItemProps) => {
  const projectRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const projectLeftRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const projectRightRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  useGsapProjectReveal(projectLeftRef, projectRightRef, projectRef);
  console.log('리렌더링');
  return (
    <ProjectItemContainer ref={projectRef}>
      <div ref={projectLeftRef}>
        <img src={data.imgUrl[0]} />
      </div>
      <ProjectDescBox ref={projectRightRef}>
        <h1>{`0${data.id}`}</h1>
        <h2>{data.name}</h2>
        <p>{data.period}</p>
        <p>{data.subTitle}</p>
        <StackList stackData={data.stack} />
        {/* <TagBox>
          {data.stack.map((item, idx) => (
            <Tag key={idx}>{item}</Tag>
          ))}
        </TagBox> */}
        <Button dataId={data.id} onClickMoreView={onClickMoreView} />
        {/* <Btn onClick={() => onClickMoreView(data.id)}>more view</Btn> */}
      </ProjectDescBox>
    </ProjectItemContainer>
  );
});

export default ProjectItem;

const ProjectItemContainer = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  gap: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    /* max-width: 10rem; */
  }
  img {
    display: block;
    aspect-ratio: 16 / 9;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
    transition: box-shadow 0.3s ease;
    box-shadow:
      0 2.8px 2.2px rgba(211, 211, 211, 0.02),
      0 6.7px 5.3px rgba(211, 211, 211, 0.028),
      0 12.5px 10px rgba(211, 211, 211, 0.035),
      0 22.3px 17.9px rgba(211, 211, 211, 0.042),
      0 41.8px 33.4px rgba(211, 211, 211, 0.05),
      0 100px 80px rgba(211, 211, 211, 0.07);
  }
`;

const ProjectDescBox = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  /* height: 100%; */
  > h1 {
    position: absolute;
    top: -4rem;
    left: -1rem;
    color: #00000019;
    font-size: 7rem;
    color: ${({ theme }) => theme.color.title};
  }
  > h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.color.point};
  }
`;

// const TagBox = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
// `;

// const Tag = styled.span`
//   padding: 0.5rem 1rem;
//   border: 0.5px solid #6b6b6b;
//   border-radius: 20px;
// `;

// const Btn = styled.button`
//   width: fit-content;
//   border-bottom: 0.5px solid #6b6b6b;
//   background-color: transparent;
//   /* border-radius: 20px; */
// `;

// const Button = ({ data, onClickMoreView }: ProjectListItemProps) => {
//   return <Btn onClick={() => onClickMoreView(data.id)}>more view</Btn>;
// };

// const Btn = styled.button`
//   width: fit-content;
//   border-bottom: 0.5px solid #6b6b6b;
//   background-color: transparent;
//   /* border-radius: 20px; */
// `;
