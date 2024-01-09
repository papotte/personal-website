import {Container} from 'components/common'
import Resume from 'data/resume'
import React from 'react'
import NavbarLinks from '../NavbarLinks'
import {Wrapper} from './styles'

const Navbar = () => (
  <Wrapper as={Container}>
    <div>
      <a to="/" className="title is-dark">
        <span>{Resume.basics.firstName}</span>
        &nbsp;
        <span className="has-text-weight-normal">{Resume.basics.lastName}</span>
      </a>
    </div>
    <NavbarLinks desktop />
  </Wrapper>
)

export default Navbar
