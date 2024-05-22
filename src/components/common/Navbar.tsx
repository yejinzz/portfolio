import styled from 'styled-components';
import { useGsapNavReveal } from '../../hooks/useGsap';
import useArrayRef from '../../hooks/useArrayRef';
import tw from 'twin.macro';
import { TabsProps } from '../../types/types';

const Navbar = ({ tabs }: { tabs: TabsProps[] }) => {
  const [navRef, setNavRef] = useArrayRef<HTMLButtonElement>();
  useGsapNavReveal(navRef, 6);

  return (
    <NavBar>
      {tabs.map((tab, index) => {
        return (
          <button
            aria-label={`${tab.targetName}탭으로 이동`}
            className={`${tab.targetName}__menu`}
            key={index}
            onClick={tab.onMoveToTarget}
            ref={setNavRef}
          >
            {tab.targetName}
          </button>
        );
      })}
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.nav`
  ${tw`
    fixed
    right-0
    z-10
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

  & > button {
    ${tw`
    cursor-pointer
    text-gray
    `}
  }
  .active {
    color: #fff;
  }
`;
