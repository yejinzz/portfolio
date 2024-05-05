import styled from 'styled-components';
import { useGsapNavReveal } from '../../hooks/useGsap';
import useArrayRef from '../../hooks/useArrayRef';
import tw from 'twin.macro';
import { TabsProps } from '../../types/types';

const Navbar = ({ tabs }: { tabs: TabsProps[] }) => {
  const [navRef, setNavRef] = useArrayRef<HTMLLIElement>();
  useGsapNavReveal(navRef, 6);

  return (
    <NavBar>
      <ul>
        {tabs.map((tab, index) => {
          return (
            <NavList id={tab.targetName} key={index} ref={setNavRef} onClick={tab.onMoveToTarget}>
              {tab.targetName}
            </NavList>
          );
        })}
      </ul>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.nav`
  ${tw`
    fixed
    right-0
    // right-1/2
    // translate-x-1/2
    z-1
    // sm:right-0
    // sm:translate-x-0
    
`}
  /* transform: translate(0%, 0%); */
  ul {
    ${tw`

    flex
    items-center
    px-2
    py-6
    text-[0.875rem]
    gap-4
    md:gap-8
    md:px-6
    md:text-base
  `}
  }
`;

const NavList = styled.li`
  ${tw`
    cursor-pointer
    text-gray
  `}
`;
