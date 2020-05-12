import 'assets/fontello/css/animation.css'
import 'assets/fontello/css/fi.css'
import {Footer} from 'components/theme'
import React from 'react'
import './fonts.css'
import 'i18n'

export const Layout = ({children}) => (
  <>
    {children}
    <Footer />
  </>
)
