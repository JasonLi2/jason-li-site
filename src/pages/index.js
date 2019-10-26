import React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Landing from '../components/landing'
import About from '../components/about'
import Resume from '../components/resume'
import Contact from '../components/contact'

const Index = () => (
    <Layout>
      <Helmet>
        <title>Jason Li</title>
      </Helmet>
        <Landing />
        <About />
        <Resume />
        <Contact />
    </Layout>
)

export default Index
