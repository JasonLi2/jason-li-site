import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Landing from "../components/landing";
import About from "../components/about";
import Resume from "../components/resume";
import Contact from "../components/contact";
import BlogList from "../components/blogList";

const Index = ({
  data: {
    hero,
    allFile: { resumeImages },
    allMarkdownRemark: { edges }
  }
}) => (
  <Layout>
    <Helmet>
      <title>Jason Li - Welcome</title>
    </Helmet>
    <Landing hero={hero} />
    <BlogList data={edges} />
    <About name="about" />
    <Resume images={resumeImages} />
    <Contact name="contact" />
  </Layout>
);

export default Index;

export const pageQuery = graphql`
  query landingQuery {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "resume" } }) {
      resumeImages: edges {
        node {
          childImageSharp {
            fixed(width: 300, height: 400) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
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
    }
  }
`;
