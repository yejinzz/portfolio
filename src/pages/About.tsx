import styled from 'styled-components';
// import { StackData } from '../data/aboutData';
import { Section } from '../styles/CommonStyle';
// import SubTitle from '../components/about/SubTitle';
import SectionTitle from '../components/common/SectionTitle';
import { useGsapAboutCircle, useGsapAboutReveal } from '../hooks/useGsap';
import useArrayRef from '../hooks/useArrayRef';
import { useRef } from 'react';
import GalleryItem from '../components/about/ProfileImg';

import TechList from '../components/about/TechList';
import Line from '/public/image/svg/path.svg?react';

const About = () => {
  const main = useRef<HTMLDivElement>(null);
  const [aboutRef, setAboutRef] = useArrayRef<HTMLDivElement>();

  useGsapAboutReveal(aboutRef);
  useGsapAboutCircle(main);

  return (
    <AboutSection ref={main} id="about">
      <SectionTitle>About</SectionTitle>

      <AboutWrapper>
        <GalleryItem />
        <div>
          {/* 
          <div className="path_info">
            <strong>책임감과 성실함 </strong>
            <p>
              
            </p>
          </div>
          <div className="path_info">
            <strong>사용자 친화적</strong>
            <p>
              사용자가 쉽게 상호 작용할 수 있는 인터페이스를 고민하고,
              레이아웃이 모든 기기에 반응하도록 개발합니다.
            </p>
          </div>
          <div className="path_info">
            <strong>흥미로운 UI/UX</strong>
            <p>
              동적이고 매력적인 UI를 디자인하는 것이 즐겁고,
              흥미로운 UX를 제공하는 개발자가 되는 것이 목표입니다.
            </p>
          </div>
          <div className="path_info">
            <strong>누구나 이해할 수 있는 코드</strong>
            <p>
            관심사 분리를 원칙으로 코드를 작성하고 있으며,
            누구나 이해할 수 있는 코드를 작성하는 것은 제 끊임없는 과제입니다.
              // 효율적인 코드에 대해 늘 고민하며, 지속적인 리팩토링을 통해 코드의 유지보수성, 재사용성을 높이는 것에
              // 보람을 느낍니다.
            </p>
          </div> */}
          <AboutMeContainer ref={setAboutRef}>
            {/* <SubTitle>About me</SubTitle> */}
            <div className="About__desc">
              {/* <h1> */}
              안녕하세요! 신입 프론트엔드 개발자 나예진입니다.
              {/* </h1> */}
              <br />
              {/* <br /> */}
              <strong>
                “ Do The Best ”<Line className="About_path" />
              </strong>
              제 모토이자 저를 가장 잘 표현할 수 있는 문장입니다.
              <br />
              작고 사소한 일 일지라도,
              <br />
              최고의 결과물을 만들어내기 위해 최선을 다하는 사람입니다.
              <br />
              <br />
              팀 또는 개인 프로젝트를 진행하며
              <br />
              작은 기능이라도 가치있는 결과를 내기 위해
              <br />
              최선을 다해 프로젝트에 임하였고,
              <br />
              이 후에도 지속적인 리팩토링과 학습을 진행하며
              <br />
              프로젝트 품질을 높이기 위해 노력하고 있습니다.
              {/* 사용자 중심의 개발과 세심한 UI 디자인을 통해 사용자 친화적인 개발자가 되는 것이 목표입니다. */}
            </div>
          </AboutMeContainer>
          <TechList ref={setAboutRef} />
        </div>
      </AboutWrapper>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled(Section)`
  position: relative;
  /* padding: 0; */

  .path_info {
    position: absolute;

    &:nth-of-type(1) {
      top: 30%;
      left: 50%;
    }
    &:nth-of-type(2) {
      top: 50%;
      right: 10%;
    }
    &:nth-of-type(3) {
      top: 50%;
      left: 35%;
    }
    strong {
      font-weight: bold;
      /* position: absolute; */
      top: -4rem;
      left: -1rem;
      color: #00000019;
      font-size: 2rem;
      color: ${({ theme }) => theme.color.title};
    }
    p {
      margin: 10px 0;
      width: 13em;
      line-height: 1.4;
      /* color: get(text-color); */
      a {
        /* color: get(primary); */
        font-weight: 600;
      }
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5rem;
  margin: 5rem 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`;

const AboutMeContainer = styled.div`
  /* gap: 5rem; */
  .About__desc {
    line-height: 1.8;
    font-weight: 400;
    margin: 2rem;
    word-break: keep-all;

    & strong {
      /* width: fit-content; */
      position: relative;
      padding: 0 0.8rem;
      display: block;
      margin: 1rem;
      font-size: 1.2rem;

      font-family: 'Montserrat', 'sans-serif';
      /* font-weight: 700; */

      .About_path {
        position: absolute;
        top: -60%;
        left: 0;
        width: 10.5rem;
        height: auto;
      }

      #path_line {
        stroke: ${({ theme }) => theme.color.point};
      }
    }
  }

  @media (max-width: 768px) {
  }
`;
