import React, {useState} from 'react'
import Resume from '../../../data/resume'
import {Container} from '../../common/Container'
import Hamburger from './Hamburger'
import Navbar from './Navbar'
import {Wrapper as HeaderWrapper} from './Navbar/styles'
import Sidebar from './Sidebar'
import {Overlay, Wrapper} from './styles'

export const Header = () => {
  const [sidebar, toggle] = useState(false)

  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  )
}

export const SimpleHeader = () => {
  return (
    <HeaderWrapper as={Container}>
      <div>
        <a href="../" className="title is-dark">
          <span>{Resume.basics.firstName}</span>
          &nbsp;
          <span className="has-text-weight-normal">{Resume.basics.lastName}</span>
        </a>
      </div>
    </HeaderWrapper>
  )
}
