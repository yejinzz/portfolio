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
import Markdown from '../../common/MarkDown';

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
                  <h1>{detail.title}</h1>
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
                  <Overview>
                    <Markdown>{detail.overview}</Markdown>
                  </Overview>
                </ProjectDetailBox>
                <ProjectDetailBox title="Contribution">
                  <ContribListWrap>
                    {detail.contribs.map((contrib, idx) => {
                      return (
                        <ContribList key={idx}>
                          {contrib.title && <p className="contrib__topList">{contrib.title}</p>}
                          <div className="bottom__list_container">
                            {contrib.details &&
                              contrib.details.map((detail, subIdx) => (
                                <>
                                  {typeof detail === 'string' ? (
                                    <li className="bottom__list">
                                      <Markdown key={subIdx}>{detail}</Markdown>
                                    </li>
                                  ) : (
                                    <li className="bottom__list">
                                      <p key={subIdx}>{detail.subDetail}</p>
                                      <ul>
                                        {detail.subDesc.map((desc, subIdx) => (
                                          <li>
                                            <Markdown key={subIdx}>{desc}</Markdown>
                                          </li>
                                        ))}
                                      </ul>
                                    </li>
                                  )}
                                </>
                              ))}
                          </div>
                        </ContribList>
                      );
                    })}
                  </ContribListWrap>
                </ProjectDetailBox>

                <ProjectDetailBox title="screen">
                  <ScreenListWrap>
                    {detail.screen.map((screen, idx) => {
                      return (
                        <li key={idx}>
                          <figure>
                            <img src={screen.imgUrl} alt={`${screen.screenDesc} 구현 이미지`} loading="lazy" />
                            <figcaption>{screen.screenDesc}</figcaption>
                          </figure>
                        </li>
                      );
                    })}
                  </ScreenListWrap>
                </ProjectDetailBox>
                {detail.troubleShooting && (
                  <ProjectDetailBox title="Trouble Shooting">
                    <TroubleShooting>
                      {detail.troubleShooting.map((trouble) => {
                        return (
                          <>
                            <p>{trouble.title}</p>
                            <TroubleDetail>
                              {trouble.details?.map((detail) => {
                                return (
                                  <li>
                                    <p>{detail.label}</p>
                                    <Markdown>{detail.desc}</Markdown>
                                  </li>
                                );
                              })}
                            </TroubleDetail>
                            <TroubleReference>
                              {trouble.referencesCode?.map((ref, idx) => {
                                return <Markdown key={idx}>{ref}</Markdown>;
                              })}
                              {trouble.referencesImg?.map((ref, idx) => {
                                return <img key={idx} src={ref} alt="reference image" loading="lazy" />;
                              })}
                            </TroubleReference>
                          </>
                        );
                      })}
                    </TroubleShooting>
                  </ProjectDetailBox>
                )}
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
  z-10
  max-lg:p-0
  lg:px-52
  `}
`;
const ContentWrap = styled.article<ThumbUrlProp>`
  ${tw`
    relative
    bg-[#242424]
    w-full
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
  `}

  & > ul {
    ${tw`
        justify-center
        
      `}
  }

  & > h1 {
    ${tw`
        text-[3rem]
        text-center
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

const ContribListWrap = styled.ul`
  ${tw`
    flex
    flex-col
    gap-10
    px-8
    pt-8
  `}
`;

const ContribList = styled.li`
  .bottom__list_container {
    ${tw`
      py-3
      mx-5
      // bg-[#363636]
      // rounded-[5px]
    `}
  }

  .bottom__list {
    ${tw`
      list-disc
      leading-loose
      whitespace-pre-line
      ml-5
      
    `}

    &::marker {
      ${tw`
        text-point
      `}
    }

    ul li {
      ${tw`
        list-[circle]
        mx-5
      `}

      &::marker {
        ${tw`
          text-[#ffffff]
        `}
      }
    }
  }
  .contrib__topList {
    ${tw`
      border-solid
      border-l-[4px]
      border-point
      pl-2
      py-1
      font-bold
      w-fit
    `}
  }
`;

const ScreenListWrap = styled.ul`
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
      & > img {
        ${tw`
          border
          border-solid 
          border-gray50
        `}
      }

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
      z-1
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
      overflow-y-hidden
      backdrop-blur-[4px]
      bg-[#000000ac]
    `}
`;
const ProjectLinks = styled.div`
  ${tw` 
    flex
    gap-5
  `}
`;
const TroubleShooting = styled.div`
  ${tw` 
    whitespace-pre-line
    leading-loose
    px-8
    pt-8
  `}
  & > p {
    ${tw` 
    mb-4
    text-[1.1rem]
    font-bold
    text-point
  `}
  }
`;

const TroubleDetail = styled.ul`
  ${tw` 
    flex
    flex-col
    gap-6
  `}

  & li {
    ${tw`
      list-disc
      ml-4
    `}

    &::marker {
      ${tw`
        text-[#6c92af]
      `}
    }

    & > p {
      ${tw` 
        font-bold
      `}
    }
  }
`;

const TroubleReference = styled.div`
  ${tw` 
    m-5
    flex
    flex-col
    gap-5
  `}
`;
