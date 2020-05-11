import {Layout, ScrollToTop, SEO} from 'components/common'
import {Contact, Experience, Intro, Skills} from 'components/landing'
import React from 'react'
import 'styles/main.scss'

let fabButton = document.getElementById('to-top')
window.onscroll = () => {
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (fabButton) {
    let y = window.scrollY
    if (y > 0) {
      fabButton.classList.remove('hidden')
    } else {
      fabButton.classList.add('hidden')
    }
  } else {
    fabButton = document.getElementById('to-top')
  }
}

export default () => (
  <Layout>
    <ScrollToTop />
    <SEO />
    <Intro />
    <Skills />
    <Experience />
    <Contact />
  </Layout>
)
