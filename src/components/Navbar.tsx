import styled from "@emotion/styled";
import { useState } from "react";

type NavProps = {
  content: string;
};

const Nav = styled("nav")`
z-index: 2;
  position: sticky;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: space-around;
  background-color: var(--color-bg) ;
  font-size: 1.2rem;
  min-height: 10vh;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavWrapper = styled.div<NavProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.content};
  min-width: 40%;
  max-width: 60%;
  @media (max-width: 500px)
  {
    display: none;
  }
`;
const HamburgerWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 500px)
  {
    display: flex;
    flex-direction: column;
  }

`
const MenuBtn = styled.button`
  margin: 10px;
  text-decoration: none;
  font-family: var(--font-family);
  font-size: clamp(var(--fs-m), var(--fs-s));
  color: var(--text-color);
  background-color: transparent;
  border: none;
`
const A = styled.a`
  margin: 10px;
  text-decoration: none;
  font-family: var(--font-family);
  font-size: clamp(var(--fs-m), var(--fs-s));
`;

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<Boolean>(false);
  const handleOnClick = () =>setToggleMenu(!toggleMenu)
  return (
    <Nav>
      <NavWrapper content="space-between">
        <A href="#">Home</A>
        <A href="#About">About</A>
        <A href="#Team">Team</A>
        <A href="#Footer">Contact</A>
      </NavWrapper>
      <NavWrapper content="flex-end">
        <A href="#">Sign In</A>
        <A href="#">Sign Up</A>
      </NavWrapper>
      <HamburgerWrapper>
        <MenuBtn onClick={handleOnClick}>
          Menu
        </MenuBtn>
        {toggleMenu === true ? (
          <>
          <A href="#" onClick={handleOnClick}>Home</A>
          <A href="#About" onClick={handleOnClick}>About</A>
          <A href="#Team" onClick={handleOnClick}>Team</A>
          <A href="#Contact" onClick={handleOnClick} >Contact</A>
          <A href="#" onClick={handleOnClick}>Sign In</A>
        <A href="#Footer" onClick={handleOnClick}>Sign Up</A>
        </>
         ): null}
      </HamburgerWrapper>

    </Nav>
  );
};

export default Navbar;
