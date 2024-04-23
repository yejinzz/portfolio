import styled from 'styled-components';
import { useGsapNavReveal } from '../../hooks/useGsap';
import useArrayRef from '../../hooks/useArrayRef';
import tw from 'twin.macro';

const Navbar = () => {
  const [navRef, setNavRefRef] = useArrayRef<HTMLLIElement>();
  const navMenu = ['Home', 'About', 'Projects', 'Contact'];
  useGsapNavReveal(navRef, 6);
  return (
    <NavBar>
      <ul>
        {navMenu.map((menu, index) => (
          <li key={index} ref={setNavRefRef}>
            {menu}
          </li>
        ))}
      </ul>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.nav`
  ${tw`
    fixed
    right-0
`}
  ul {
    ${tw`
    flex
    items-center
    fixed
    right-0
    p-6
    text-lg
    gap-8
`}
  }
`;
