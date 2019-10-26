import React from "react"
import Layout from '../components/layout'
import Landing from '../components/landing'
import About from '../components/about'
import Resume from '../components/resume'
import Contact from '../components/contact'

const Index = () => (
    <Layout>
        <Landing />
        <About />
        <Resume />
        <Contact />
    </Layout>
)

export default Index
