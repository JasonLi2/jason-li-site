import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  z-index: 99;
  left: 0;
  align-items: center;
  padding: 0.5rem 0;
  background: ${props => props.background};
  transition: all 0.3s;
`;

const Name = styled.h4`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2rem;
  padding: 1rem 3rem;
  color: #fff;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
`;

const NavList = styled.ul`
  list-style: none;
  padding-left: 3rem;
`;

const NavItem = styled.li`
  display: inline-block;
  color: #fff;
  :not(:last-child) {
    margin-right: 3rem;
  }
`;

const Navbar = () => {
  const [background, setBackground] = useState("transparent");
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    if (window.pageYOffset <= window.innerHeight) {
      setBackground("transparent");
    } else {
      setBackground("#202020");
    }
  }
  return (
    <Container background={background}>
      <Link to="/">
        <Name>Jason Li</Name>
      </Link>
      <NavList>
        <NavItem>
          <a href="#about">About</a>
        </NavItem>
        <NavItem>
          <Link to="#blog">Blog</Link>
        </NavItem>
        <NavItem>
          <Link to="#contact">Contact</Link>
        </NavItem>
      </NavList>
    </Container>
  );
};

export default Navbar;
