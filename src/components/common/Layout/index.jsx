import 'assets/fontello/css/animation.css'
import 'assets/fontello/css/fi.css'
import {Footer} from 'components/theme'
import React from 'react'
import {ScrollToTop} from '../ScrollToTop'
import './fonts.css'

export const Layout = ({children}) => (
  <>
    {children}
    <ScrollToTop />
    <Footer />
  </>
)
