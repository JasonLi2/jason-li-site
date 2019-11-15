import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  transition: all 0.3s;
  background: ${props => props.background};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.5rem 3rem;
  @media only screen and (max-width: 39em) {
    justify-content: space-between;
  }
`;

const Logo = styled.span`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2rem;
  padding: 1rem 3rem 1rem 0;
  color: #fff;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
`;

const Checkbox = styled.input`
  display: none;
`;

const MenuIcon = styled.label`
  position: relative;
  display: none;
  z-index: 10;
  height: 5rem;
  width: 5rem;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 2px;
    background-color: #efefef;
    transition: all 0.3s;
    ${Checkbox}:checked ~ & {
      background-color: transparent;
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 3rem;
      height: 2px;
      background-color: #efefef;
      transition: all 0.3s;
    }
    &::before {
      top: 0.75rem;
      ${Checkbox}:checked ~ & {
        transform: rotate(135deg);
        top: 0;
      }
    }
    &::after {
      top: -0.75rem;
      ${Checkbox}:checked ~ & {
        transform: rotate(-135deg);
        top: 0;
      }
    }
  }
  @media only screen and (max-width: 39em) {
    display: block;
  }
`;

const Links = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-column-gap: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1rem 3rem;
  @media only screen and (max-width: 39em) {
    grid-template-columns: 1fr;
    grid-row-gap: 5rem;
    padding: 3rem;
    justify-items: center;
    z-index: 9;
    position: absolute;
    top: 1.5rem;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    transform-origin: top right;
    background-color: #3e4246;
    justify-content: center;
    opacity: 0;
    width: 95%;
    border-radius: 3px;
    visibility: hidden;
    transition: all 0.3s;
    ${Checkbox}:checked ~ & {
      opacity: 1;
      transform: translateX(-50%) scale(1);
      visibility: visible;
    }
  }
`;

const LinkContainer = styled.li`
  color: #fff;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Nav = () => {
  const [background, setBackground] = useState("transparent");
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    if (window.pageYOffset < 10) {
      setBackground("transparent");
    } else {
      setBackground("#202020");
    }
  }
  return (
    <Container background={background}>
      <Link to="/">
        <Logo>Jason Li</Logo>
      </Link>
      <Checkbox type="checkbox" id="menu" />
      <MenuIcon htmlFor="menu">
        <span />
      </MenuIcon>
      <Links>
        <LinkContainer>
          <NavLink to="/#about">About</NavLink>
        </LinkContainer>
        <LinkContainer>
          <NavLink to="/#blog">Blog</NavLink>
        </LinkContainer>
        <LinkContainer>
          <NavLink to="/#contact">Contact</NavLink>
        </LinkContainer>
      </Links>
    </Container>
  );
};

export default Nav;
