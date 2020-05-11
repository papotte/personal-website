import {Layout, SEO} from 'components/common'
import {Contact, Experience, Intro, Skills} from 'components/landing'
import React from 'react'
import ScrollToTop from 'react-scroll-up'
import 'styles/main.scss'

export default () => (
  <Layout>
    <ScrollToTop showUnder={160}>
      <div className="button is-fab is-energized">
        <span className="icon" style={{marginTop: -3 + 'px'}}>
          <i className="fi icon-chevron-up" />
        </span>
      </div>
    </ScrollToTop>
    <SEO />
    <Intro />
    <Skills />
    <Experience />
    <Contact />
  </Layout>
)
