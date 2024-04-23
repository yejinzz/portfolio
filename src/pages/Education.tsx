import styled from 'styled-components';
import SectionTitle from '../components/common/SectionTitle';
import { Section as EducationSection } from '../styles/CommonStyle';
import tw from 'twin.macro';
import useArrayRef from '../hooks/useArrayRef';
import { useGsapEducation } from '../hooks/useGsap';
import { RefObject, useRef } from 'react';

const Education = ({ LastRef }: { LastRef: React.ForwardedRef<HTMLElement> }) => {
  const projectRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [eductionRef, setEducationRef] = useArrayRef<HTMLDivElement>();

  useGsapEducation(eductionRef);

  return (
    <EducationSection className="eduction" ref={LastRef}>
      <SectionTitle>Education.</SectionTitle>
      <EducationContainer ref={projectRef}>
        <EducationItem ref={setEducationRef}>
          <h1>코드스테이츠 프론트엔드 44기</h1>
          <p>2023-02 ~ 2023-08</p>
        </EducationItem>
        <EducationItem ref={setEducationRef}>
          <h1>목원대학교</h1>
          <p>국제문화학과 전공</p>
          <p>마케팅빅데이터학과 복수전공</p>
          <p>2018-02 ~ 2024-02</p>
        </EducationItem>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;

const EducationContainer = styled.div`
  ${tw`
    flex
    // justify-between
    // gap-20
    mb-20
  `}
`;

const EducationItem = styled.div`
  ${tw`
    flex-1
    border-solid
    border-l-8
    border-point
    pl-5
    py-3
`}
  &> h1 {
    ${tw`
        // text-point
        text-[1.5rem]
        mb-4
      `}
  }
  p {
    ${tw`
    leading-6
      `}
  }
`;
