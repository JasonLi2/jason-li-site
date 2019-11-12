import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Container = styled.section`
  background: #303030;
  padding: 5rem 0;
`;

const Content = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #202020;
  margin: 3rem;
  border-radius: 10px;
  overflow: hidden;
  width: 27rem;
  height: 45rem;
`;

const Secondary = styled.h3`
  color: #fff;
  font-size: 3rem;
  font-weight: 300;
  max-width: 100rem;
  margin: 0 auto;
`;

const Tertiary = styled.h4`
  color: #afafaf;
  font-weight: 300;
  font-size: 2.5rem;
  padding: 1.5rem 1.5rem 0;
`;

const Details = styled.p`
  padding: 1.5rem;
`;

const Image = styled(Img)`
  height: 75%;
`;

const BlogList = ({ data }) => (
  <Container>
    <Secondary>Blog Posts</Secondary>
    <Content>
      {data.map(
        (
          {
            node: {
              fields: { slug },
              frontmatter: { title, image, date }
            }
          },
          count
        ) => (
          <Card key={count}>
            <Link to={slug}>
              <Image fluid={image.childImageSharp.fluid} objectFit="cover" />
              <Tertiary>{title}</Tertiary>
              <Details>{date}</Details>
            </Link>
          </Card>
        )
      )}
    </Content>
  </Container>
);

export default BlogList;
