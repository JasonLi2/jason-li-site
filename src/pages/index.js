import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Landing from "../components/landing";
import About from "../components/about";
import Resume from "../components/resume";
import Contact from "../components/contact";

const Index = ({
  data: {
    hero,
    allFile: { resumeImages }
  }
}) => (
  <Layout>
    <Helmet>
      <title>Jason Li - Welcome</title>
    </Helmet>
    <Landing hero={hero} />
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
  }
`;
