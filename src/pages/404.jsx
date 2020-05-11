import illustration from 'assets/illustrations/not_found.svg'
import {Container} from 'components/common/Container'
import {Layout} from 'components/common/Layout'
import {Details, IntroWrapper} from 'components/landing/Intro/styles'
import React from 'react'

export default () => (
  <Layout>
    <div className="container">
      <IntroWrapper as={Container}>
        <Details>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <a href="../" className="button is-primary">Go back</a>
        </Details>
        <figure className="image">
          <img src={illustration} alt="not found" style={{width: 450 + 'px'}} />
        </figure>
      </IntroWrapper>
    </div>
  </Layout>
)
