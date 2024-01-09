import {SEO} from 'components/common'
import {Curriculum} from 'components/landing'
import React from 'react'
import 'styles/main.scss'
import Layout from '../components/common/Layout'

function CV() {
  return (
    <Layout>
      <Curriculum />
    </Layout>
  )
}
export default CV

export const Head = () => <SEO></SEO>
