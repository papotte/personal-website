import {Layout, SEO} from 'components/common'
import {Contact, Experience, Intro, Skills} from 'components/landing'
import React from 'react'
import 'styles/main.scss'

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Experience />
    <Contact />
  </Layout>
);
