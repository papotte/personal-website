import {Container} from 'components/common'
import React from 'react'
import NavbarLinks from '../NavbarLinks'
import {Wrapper} from './styles'

const Navbar = () => (
  <Wrapper as={Container}>
    <div>
      <a to="/" className="title is-dark">
        <span>Rossana</span>
        &nbsp;
        <span className="has-text-weight-normal">Bermudez</span>
      </a>
    </div>
    <NavbarLinks desktop />
  </Wrapper>
)

export default Navbar
