import {changeLocale, FormattedMessage} from 'gatsby-plugin-intl'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {NavbarMenu} from '../NavbarMenu'
import {Wrapper} from './styles'

const options = [
  {key: 'lang.en', displayName: 'long', value: 'short'},
  {key: 'lang.de', displayName: 'long', value: 'short'},
  {key: 'lang.es', displayName: 'long', value: 'short'}
]

function LanguageSelector() {
  return (
    <NavbarMenu
      icon="language"
      intl={true}
      options={options}
      onChange={item => {
        changeLocale(item)
      }}
    />
  )
}

function NavLink({name}) {
  return (
    <AnchorLink className="is-dark" href={'#' + name}>
      <FormattedMessage id={'nav.' + name} />
    </AnchorLink>
  )
}

const NavbarLinks = ({desktop}) => (
  <Wrapper desktop={desktop}>
    <NavLink name="about" />
    <NavLink name="skills" />
    <NavLink name="experience" />
    <NavLink name="contact" />
    <LanguageSelector />
  </Wrapper>
)

export default NavbarLinks
