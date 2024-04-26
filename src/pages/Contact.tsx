import { Section } from '../styles/CommonStyle';
import TextAnimation from '../components/common/TextAnimation';
import { myInfo } from '../data/data';
import styled from 'styled-components';
import tw from 'twin.macro';
import LinkButton from '../components/common/LinkButton';
import useArrayRef from '../hooks/useArrayRef';
import { useGsapContact } from '../hooks/useGsap';
import { TabsProps } from '../types/types';

const Contact = ({ tabs }: { tabs: TabsProps[] }) => {
  const [contactElRef, setContactElRef] = useArrayRef<HTMLElement>();

  useGsapContact(contactElRef);
  return (
    <ContactSection className="contact" ref={tabs[4].targetRef}>
      <TextAnimation setRef={setContactElRef}>Thank you!</TextAnimation>

      <ContactList ref={setContactElRef}>
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
