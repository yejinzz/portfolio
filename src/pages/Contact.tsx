import React from 'react';
import { Section } from '../styles/CommonStyle';
import TextAnimation from '../components/common/TextAnimation';
import { myInfo } from '../data/data';
import styled from 'styled-components';
import tw from 'twin.macro';
import LinkButton from '../components/common/LinkButton';

const Contact = ({ LastRef }: { LastRef: React.ForwardedRef<HTMLElement> }) => {
  return (
    <ContactSection className="h-screen flex flex-col justify-center items-center" ref={LastRef}>
      <TextAnimation>Thank you!</TextAnimation>

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
const ContactSection = styled(Section)`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    h-screen
  `}
`;

const ContactList = styled.ul`
  ${tw`
        flex
        items-center
        gap-12
        mt-8
    `}
`;
