import illustration from 'assets/illustrations/not_found.svg'
import {Container} from 'components/common/Container'
import Layout from 'components/common/Layout'
import {Details, IntroWrapper} from 'components/landing/Intro/styles'
import React from 'react'

function Credits() {
  return (
    <Layout>
      <div className="container">
        <IntroWrapper as={Container}>
          <Details>
            <h1>CREDITS</h1>
            <p>This page was possible thanks to:</p>
            <ul>
              <li>
                <a href="http://www.freepik.com">Designed by stories / Freepik</a>
              </li>
            </ul>
          </Details>
          <figure className="image">
            <img src={illustration} alt="not found" style={{width: 450 + 'px'}} />
          </figure>
        </IntroWrapper>
      </div>
    </Layout>
  )
}
export default Credits
