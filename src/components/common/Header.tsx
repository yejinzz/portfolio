import { socialLinks } from "../../data/data";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="Header__logo" aria-label="logo">
        YEJIN.
      </div>
      <nav>
        <ul className="Header__nav-group">
          {socialLinks.map(({ href, label, icon }) => (
            <li key={label} className="Header__nav-item">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} link`}
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* </Link> */}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 8rem;
  padding: 0 4rem;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  background: transparent;
  z-index: 999;
  transition: background-color 0.3s, height 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.3rem;
  .Header__logo {
    /* opacity: 0.1; */
    /* font-size: 2rem; */
    font-weight: 900;
  }
  .Header__nav-group {
    display: flex;
    justify-content: center;
    color: inherit;
  }
`;
