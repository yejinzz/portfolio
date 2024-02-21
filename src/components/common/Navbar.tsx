import styled from 'styled-components';
import { useGsapNavReveal } from '../../hooks/useGsap';
import useArrayRef from '../../hooks/useArrayRef';
// import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [navRef, setNavRefRef] = useArrayRef<HTMLLIElement>();

  useGsapNavReveal(navRef, 6);
  return (
    <NavBar>
      <ul>
        <li ref={setNavRefRef}>Home</li>
        <li ref={setNavRefRef}>About</li>
        <li ref={setNavRefRef}>Projects</li>
        <li ref={setNavRefRef}>Contact</li>
      </ul>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.nav`
  position: fixed;
  right: 0;
  padding: 1.5rem;
  /* z-index: 999; */
  ul {
    font-size: ${({ theme }) => theme.fontSize.lg};

    /* font-family: 'Montserrat', 'sans-serif'; */
    /* font-weight: 100; */
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;
