import 'assets/fontello/css/animation.css'
import 'assets/fontello/css/fi.css'
import {Footer} from 'components/theme'
import {injectIntl} from 'gatsby-plugin-intl'
import React from 'react'
import ScrollToTop from 'react-scroll-up'
import './fonts.css'

function LayoutComponent({children}) {
  return (
    <>
      <ScrollToTop showUnder={160}>
        <div className="button is-fab is-energized">
          <span className="icon" style={{marginTop: -3 + 'px'}}>
            <i className="fi icon-chevron-up" />
          </span>
        </div>
      </ScrollToTop>
      {children}
      <Footer />
    </>
  )
}

const Layout = injectIntl(LayoutComponent)
export default Layout
