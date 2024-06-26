import styled from 'styled-components';
import { Section as AboutSection } from '../styles/CommonStyle';
import SectionTitle from '../components/common/SectionTitle';
import { useGsapAboutCirclePath, useGsapAboutReveal } from '../hooks/useGsap';
import useArrayRef from '../hooks/useArrayRef';
import ProfileImg from '../components/about/ProfileImg';
import TechList from '../components/about/TechList';
import Line from '/public/image/svg/path.svg?react';
import tw from 'twin.macro';
import SubTitle from '../components/common/SubTitle';
import { TabsProps } from '../types/types';

const About = ({ tabs }: { tabs: TabsProps[] }) => {
  // const main = useRef<HTMLDivElement>(null);
  const [aboutElRef, setAboutElRef] = useArrayRef<HTMLDivElement>();

  useGsapAboutReveal(aboutElRef);
  useGsapAboutCirclePath();

  return (
    <AboutSection id="about" ref={tabs[1].targetRef}>
      <SectionTitle>About</SectionTitle>

      <AboutWrapper>
        <div className="about__img">
          <ProfileImg />
        </div>
        <div>
          <AboutMeContainer ref={setAboutElRef}>
            <SubTitle>Introduction</SubTitle>
            <div className="About__desc">
              <strong>
                “ 시작이 반이다. ”
                <Line className="About__path" />
              </strong>
              시작이 없으면 끝도 없듯이,늘 시작에 가치를 둡니다.
              <br />
              때문에 새로운 도전이나 배움에 두려움이 없고
              <br />
              한 번 시작한 일은 끝까지 완수하여 얻어가는 것을 만듭니다.
              <br />
              <br />
              사용자에게 최고의 경험을 제공하는 개발자를 목표로,
              <br />
              디자인과 기술이 만나는 지점에서
              <br />
              지속적으로 배우고 도전하여 목표를 향해 나아가겠습니다.
            </div>
          </AboutMeContainer>
          <TechList setAboutRef={setAboutElRef} />
        </div>
      </AboutWrapper>
    </AboutSection>
  );
};

export default About;

const AboutWrapper = styled.div`
  ${tw`
  flex
  flex-col
  justify-between
  gap-12
  lg:flex-row
  `}
  .about__img {
    ${tw`
      flex-1
    `}
  }
`;

const AboutMeContainer = styled.div`
  ${tw`
    leading-8
    break-keep
  `}
  .About__desc {
    ${tw`
      ml-4
      my-12
      max-[425px]:ml-0
  `}
  }
  & strong {
    ${tw`
      block
      relative
      px-[0.8rem]
      mb-[1.5rem]
      text-[1.5rem]
    `}

    .About__path {
      ${tw`
        absolute
        top-[-70%]
        left-1
        w-[11.8rem]
        h-[auto]
      `}
    }

    #path_line {
      ${tw`
        stroke-point
      `}
    }
  }
`;
