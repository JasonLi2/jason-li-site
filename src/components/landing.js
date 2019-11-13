import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const Container = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  @media only screen and (max-width: 39em) {
    width: 100%;
    padding: 3rem;
  }
`;

const Primary = styled.h1`
  color: #fff;
  font-size: 5rem;
  font-weight: 700;
  padding: 3rem 0 0;
`;

const Secondary = styled.h3`
  color: #fff;
  font-size: 3rem;
  font-weight: 300;
`;

const Landing = ({ hero }) => (
  <Container fluid={hero.childImageSharp.fluid} loading="eager">
    <Content>
      <Primary>Jason Li</Primary>
      <Secondary>
        Developer
      </Secondary>
       <Secondary>
        Avid gamer
      </Secondary>
       <Secondary>
        Anime fan
      </Secondary>
      <Secondary>
        Amateur artist and musician
      </Secondary>
    </Content>
  </Container>
);

export default Landing;
