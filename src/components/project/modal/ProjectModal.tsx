import React, { Dispatch, useCallback } from 'react';
import styled from 'styled-components';
import { projectDataProps } from '../../../types/types';
import { createPortal } from 'react-dom';
import StackList from '../../common/StackList';
import tw from 'twin.macro';
import { ThumbUrlProp } from '../../../types/styleTypes';
import ProjectDetailBox from './ProjectDetailBox';
import CloseIcon from '/public/image/svg/icon/close.svg?react';
import GithubIcon from '/public/image/svg/icon/github.svg?react';
import LinkIcon from '/public/image/svg/icon/link.svg?react';
import LinkButton from '../../common/LinkButton';

interface ProjectModalProps {
  detail: projectDataProps;
  setIsOpenModal: Dispatch<React.SetStateAction<boolean>>;
}

const ProjectModal = ({ detail, setIsOpenModal }: ProjectModalProps) => {
  const closeModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  return (
    <>
      {createPortal(
        <>
          <ModalContainer>
            <ModalBackground onClick={closeModal} />

            <ContentWrap thumbUrl={detail.thumbImg}>
              <button className="close_button" onClick={closeModal}>
                <CloseIcon />
              </button>

              <div>
                <ThumbContainer>
                  <img src={detail.thumbImg} alt={`${detail.thumbImg} 대표 이미지`} />
                </ThumbContainer>
                <ProjectInfo>
                  <h1>{detail.name}</h1>
                  <p>{detail.subTitle}</p>
                  <p>{detail.team}</p>
                  <p>{detail.period}</p>
                  <StackList stackData={detail.stack} />

                  <ProjectLinks>
                    <LinkButton link={detail.link.github}>
                      <GithubIcon />
                    </LinkButton>
                    <LinkButton link={detail.link.deploy}>
                      <LinkIcon />
                    </LinkButton>
                  </ProjectLinks>
                </ProjectInfo>
              </div>

              <Details>
                <ProjectDetailBox title="Overview">
                  <Overview>{detail.overview}</Overview>
                </ProjectDetailBox>
                <ProjectDetailBox title="Contribution">
                  <ContribList>
                    {detail.contribs.map((contrib, idx) => {
                      return <li key={idx}>{contrib}</li>;
                    })}
                  </ContribList>
                </ProjectDetailBox>

                <ProjectDetailBox title="구현 화면">
                  <ScreenList>
                    {detail.screen.map((screen, idx) => {
                      return (
                        <li key={idx}>
                          <figure>
                            <img src={screen.imgUrl} alt={`${screen.screenDesc} 구현 이미지`} />
                            <figcaption>{screen.screenDesc}</figcaption>
                          </figure>
                        </li>
                      );
                    })}
                  </ScreenList>
                </ProjectDetailBox>
              </Details>
            </ContentWrap>
          </ModalContainer>
        </>,
        document.body
      )}
    </>
  );
};

export default ProjectModal;
const ModalContainer = styled.div`
  ${tw`  
  fixed
  top-0
  bottom-0
  left-0
  right-0
  overflow-y-auto
  py-10
  max-lg:p-0
  lg:px-44
  `}
`;
const ContentWrap = styled.article<ThumbUrlProp>`
  ${tw`
    relative
    bg-[#242424]
    w-full
    z-50
    py-10
    max-lg:px-[10%]
    lg:px-[15%]
    lg:py-20
  `}
  &::before {
    ${tw`
      content-['']
      absolute
      w-full
      h-[400px]
      top-0
      left-0
      z-[-1]
      opacity-20
    `}
    background-image:${({ thumbUrl }) =>
      `linear-gradient(
      to bottom,
      rgba(34, 34, 34, 0) 10%,
      rgba(34, 34, 34, 0.25) 25%,
      rgba(34, 34, 34, 0.5) 50%,
      rgba(34, 34, 34, 0.75) 75%,
      rgba(34, 34, 34, 1) 100%
    ),url(${thumbUrl});`};
    background-size: cover;
  }
  .close_button {
    ${tw`
      absolute
      top-4
      right-4
      w-4
    `}
  }
`;
const ProjectInfo = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    gap-4
    pb-12
    font-thin
  `}

  & > ul {
    ${tw`
        justify-center
      `}
  }

  & > h1 {
    ${tw`
        text-[3rem]
      `}
  }
`;

const Details = styled.div`
  ${tw`
    flex
    flex-col
    gap-20
  `}
`;

const Overview = styled.p`
  ${tw`
      leading-loose
      whitespace-pre-line
      px-8
      pt-8
    `}
`;

const ContribList = styled.ul`
  ${tw`
      px-8
      pt-8
  `}

  & li {
    ${tw`
      list-disc
      leading-[3rem]
    `}

    &::marker {
      ${tw`
        text-[#6c92af]
      `}
    }
  }
`;

const ScreenList = styled.ul`
  ${tw`
    flex
    flex-wrap
    px-8
    pt-8
    max-md:flex-col
  `}

  & li {
    ${tw`
      w-1/2
      p-4
      max-md:w-full
    `}

    figure {
      ${tw`
          flex
          flex-col
          items-center
        `}

      & > figcaption {
        ${tw`
          text-gray
        `}
      }
    }
  }
`;

const ThumbContainer = styled.div`
  ${tw` 
    flex
    justify-center
    mb-12
  `}

  img {
    ${tw` 
      w-[50vw]
      shadow-[4px_4px_10px_rgba(0, 0, 0, 0.3)]
    `}
  }
`;

const ModalBackground = styled.div`
  ${tw` 
      fixed
      top-0
      left-0
      w-full
      h-full
      backdrop-blur-[4px]
      bg-[#000000ac]
      z-0
    `}
`;
const ProjectLinks = styled.div`
  ${tw` 
    flex
    gap-5
  `}
`;
