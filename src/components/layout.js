import React from "react";
import { createGlobalStyle } from "styled-components";

import Nav from "./nav";
import Footer from "./footer";

const GlobalStyles = createGlobalStyle`
*, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html{
    font-size: 62.5%;
}

body{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: #777;
    background-color: #202020;
    font-size: 1.6rem;
    box-sizing: border-box;
}

a{
    &:visited, &:link{
        text-decoration: none;
        color: inherit;
    }

}
`;

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Nav />
    {children}
  </div>
);

export default Layout;
