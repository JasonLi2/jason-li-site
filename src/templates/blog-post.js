import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";

const Container = styled.section`
  padding: 5rem 3rem;
  max-width: 100rem;
  margin: 0 auto;
`;

const Primary = styled.h1`
  color: #fff;
  font-size: 5rem;
  font-weight: 700;
  padding: 3rem 0 0;
  line-height: 1;
`;

const Date = styled.span`
  color: #fff;
  font-size: 3rem;
  font-weight: 300;
`;

const Content = styled.div`
  font-weight: 300;
  padding: 3rem 0;
  h1 {
    color: #fff;
    font-size: 3rem;
    padding: 0 3rem;
    font-weight: 300;
    max-width: 100rem;
    margin: 0 auto;
  }
  h2 {
    color: #afafaf;
    font-weight: 300;
    font-size: 2.5rem;
    padding-top: 1.5rem;
  }
  hr {
    margin: 1rem 3rem;
  }
  h1,
  h2,
  p {
    padding: 0.5rem 0;
  }
  a {
    color: #ff4a53;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  blockquote {
    border-left: 1px solid #777;
    padding-left: 2rem;
  }
  img {
    max-width: 100%;
    object-fit: contain;
  }
  ul,
  ol {
    padding-left: 2rem;
  }
`;

const BlogPost = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date, image }
    }
  }
}) => (
  <Layout>
    <Helmet>
      <title>Jason Li - {title}</title>
    </Helmet>
    <Container>
      <Primary>{title}</Primary>
      <Date>{date}</Date>
      <Img fluid={image.childImageSharp.fluid} objectFit="contain" />
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  </Layout>
);

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMM Do, YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
