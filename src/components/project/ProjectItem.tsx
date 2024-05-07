import styled from 'styled-components';
import { projectDataProps } from '../../types/types';
import { useGsapProjectReveal } from '../../hooks/useGsap';
import { RefObject, memo, useCallback, useRef } from 'react';
import MoreViewBtn from './button/MoreViewBtn';
import StackList from '../common/StackList';
import tw from 'twin.macro';

interface Props {
  data: projectDataProps;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setProjectId: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectItem = memo(({ data, setIsOpenModal, setProjectId }: Props) => {
  const projectRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const projectLeftRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const projectRightRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useGsapProjectReveal(projectLeftRef, projectRightRef, projectRef);

  const onClickMoreView = useCallback(
    (id: number) => {
      setIsOpenModal(true);
      setProjectId(id);
    },
    [setIsOpenModal, setProjectId]
  );

  return (
    <>
      <ProjectItemContainer ref={projectRef}>
        <div className="flex-1" ref={projectLeftRef}>
          <img src={data.thumbImg} alt={data.title} loading="lazy" />
        </div>
        <ProjectDescBox ref={projectRightRef}>
          <h2>{`0${data.id}`}</h2>
          <h3>{data.title}</h3>
          <p>{data.period}</p>
          <p>{data.subTitle}</p>
          <StackList stackData={data.stack} />
          <MoreViewBtn dataId={data.id} onClickMoreView={onClickMoreView} />
        </ProjectDescBox>
      </ProjectItemContainer>
    </>
  );
});

export default ProjectItem;

const ProjectItemContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    gap-[5rem]
    md:flex-row
  `}

  img {
    ${tw`
      max-w-full
      object-cover
      object-center
      transition
      duration-300
      shadow-[3px 3px 10px rgba(0, 0, 0, 0.5),10px 10px 70px rgba(211, 211, 211, 0.1)]
    `}/* 10px 80px 80px rgba(211, 211, 211, 0.1); */
  }
`;

const ProjectDescBox = styled.div`
  ${tw`
    flex-1
    // relativex/
    flex
    flex-col
    gap-4
    w-full
  `} > h2 {
    ${tw`
      absolute
      -top-12
      -left-4
      gap-4
      w-full
      text-[4.5rem]
      text-gray50
      z-[-1]
      lg:text-[5rem]
    `}
  }
  > h3 {
    ${tw`
      gap-4
      w-full
      text-[2.5rem]
      lg:text-[3.5rem]
    `}
  }
`;
