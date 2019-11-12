import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Landing from "../components/landing";

const Blog = ({ data: { hero } }) => (
  <Layout>
    <Helmet>
      <title>Jason Li - Blog</title>
    </Helmet>
    <Landing hero={hero} />
  </Layout>
);

export default Blog;

export const pageQuery = graphql`
  query blogQuery {
    hero: file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
