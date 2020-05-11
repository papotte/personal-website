import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const ScrollToTop = () => (
  <AnchorLink id="to-top" href="#about" className="button is-fab is-energized hidden" title="Back to top"
              aria-label="Back to top">
    <span className="icon">
      <i className="fi icon-chevron-up"></i>
    </span>
  </AnchorLink>
)
