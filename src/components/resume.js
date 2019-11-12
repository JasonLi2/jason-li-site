import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Container = styled.section`
  background: #303030;
  padding: 5rem 0;
`;

const Content = styled.div`
  padding: 3rem;
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  @media only screen and (max-width: 50em) {
    flex-direction: column-reverse;
  }
`;

const Secondary = styled.h3`
  color: #fff;
  font-size: 3rem;
  padding: 0 3rem;
  font-weight: 300;
  max-width: 100rem;
  margin: 0 auto;
`;

const Tertiary = styled.h4`
  color: #afafaf;
  font-weight: 300;
  font-size: 2.5rem;
  padding-top: 1.5rem;
`;

const Details = styled.p`
  margin: 0 auto;
  text-align: justify;
`;

const Body = styled.span``;

const ImageWrapper = styled.div`
  padding: 3rem;
`;

const Resume = ({ images }) => (
  <Container>
    <Secondary>My experience</Secondary>
    <Content>
      <Body>
        <Tertiary>Projects</Tertiary>
        <Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
          volutpat odio facilisis mauris sit amet. Vel pretium lectus quam id
          leo in vitae. Curabitur gravida arcu ac tortor. Quam elementum
          pulvinar etiam non quam lacus suspendisse. Ac auctor augue mauris
          augue neque gravida in fermentum. Elementum tempus egestas sed sed
          risus pretium. Magna fringilla urna porttitor rhoncus dolor purus non
          enim. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
          Scelerisque eleifend donec pretium vulputate sapien. Et molestie ac
          feugiat sed lectus. Urna molestie at elementum eu facilisis sed. At
          ultrices mi tempus imperdiet. Dignissim diam quis enim lobortis. Cras
          pulvinar mattis nunc sed. Neque convallis a cras semper. Mauris a diam
          maecenas sed enim ut sem viverra aliquet. Dictum at tempor commodo
          ullamcorper. Sodales ut etiam sit amet. Maecenas sed enim ut sem
          viverra aliquet eget sit.
        </Details>
      </Body>
      <ImageWrapper>
        <Img fixed={images[0].node.childImageSharp.fixed} objectFit="cover" />
      </ImageWrapper>
    </Content>
    <Content reverse>
      <Body>
        <Tertiary>Education</Tertiary>
        <Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
          volutpat odio facilisis mauris sit amet. Vel pretium lectus quam id
          leo in vitae. Curabitur gravida arcu ac tortor. Quam elementum
          pulvinar etiam non quam lacus suspendisse. Ac auctor augue mauris
          augue neque gravida in fermentum. Elementum tempus egestas sed sed
          risus pretium. Magna fringilla urna porttitor rhoncus dolor purus non
          enim. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
          Scelerisque eleifend donec pretium vulputate sapien. Et molestie ac
          feugiat sed lectus. Urna molestie at elementum eu facilisis sed. At
          ultrices mi tempus imperdiet. Dignissim diam quis enim lobortis. Cras
          pulvinar mattis nunc sed. Neque convallis a cras semper. Mauris a diam
          maecenas sed enim ut sem viverra aliquet. Dictum at tempor commodo
          ullamcorper. Sodales ut etiam sit amet. Maecenas sed enim ut sem
          viverra aliquet eget sit.
        </Details>
      </Body>
      <ImageWrapper>
        <Img fixed={images[1].node.childImageSharp.fixed} objectFit="cover" />
      </ImageWrapper>
    </Content>
    <Content>
      <Body>
        <Tertiary>Work</Tertiary>
        <Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
          volutpat odio facilisis mauris sit amet. Vel pretium lectus quam id
          leo in vitae. Curabitur gravida arcu ac tortor. Quam elementum
          pulvinar etiam non quam lacus suspendisse. Ac auctor augue mauris
          augue neque gravida in fermentum. Elementum tempus egestas sed sed
          risus pretium. Magna fringilla urna porttitor rhoncus dolor purus non
          enim. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
          Scelerisque eleifend donec pretium vulputate sapien. Et molestie ac
          feugiat sed lectus. Urna molestie at elementum eu facilisis sed. At
          ultrices mi tempus imperdiet. Dignissim diam quis enim lobortis. Cras
          pulvinar mattis nunc sed. Neque convallis a cras semper. Mauris a diam
          maecenas sed enim ut sem viverra aliquet. Dictum at tempor commodo
          ullamcorper. Sodales ut etiam sit amet. Maecenas sed enim ut sem
          viverra aliquet eget sit.
        </Details>
      </Body>
      <ImageWrapper>
        <Img fixed={images[2].node.childImageSharp.fixed} objectFit="cover" />
      </ImageWrapper>
    </Content>
  </Container>
);

export default Resume;
