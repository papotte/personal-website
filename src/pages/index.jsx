import {SEO} from 'components/common'
import {Contact, Experience, Intro, Skills} from 'components/landing'
import React from 'react'
import 'styles/main.scss'
import Layout from 'components/common/Layout'

function Main() {
  return (
    <Layout>
      <Intro />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  )
}
export default Main

export const Head = () => <SEO></SEO>
