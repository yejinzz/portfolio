import React from 'react';
import { Section as ContactSection } from '../styles/CommonStyle';
import TitleAnimation from '../components/common/TitleAnimation';
// import GithubIcon from '/public/image/svg/github.svg?react';
// import VelogIcon from '/public/image/svg/velog.svg?react';
// import EmailIcon from '/public/image/svg/email.svg?react';
import { myInfo } from '../data/data';
import styled from 'styled-components';
import tw from 'twin.macro';
import LinkButton from '../components/common/LinkButton';

const Contact = ({ LastRef }: { LastRef: React.ForwardedRef<HTMLElement> }) => {
  return (
    <ContactSection className="h-screen flex flex-col justify-center items-center" ref={LastRef}>
      <TitleAnimation>Thank you!</TitleAnimation>

      <ContactList>
        {myInfo.map((info, idx) => (
          <li key={idx}>
            <LinkButton link={info.link} name={info.name}>
              {info.icon}
            </LinkButton>
          </li>
        ))}
      </ContactList>
    </ContactSection>
  );
};

export default Contact;

const ContactList = styled.ul`
  ${tw`
        flex
        items-center
        gap-12
        mt-8
    `}
`;
