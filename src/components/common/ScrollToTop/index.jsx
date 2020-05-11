import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const classes = [
  'button',
  'is-fab',
  'is-energized',
  'hidden'
]

const onScroll = () => {
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  let y = window.scrollY
  if (y > 0) {
    classes.splice(classes.findIndex((v) => v === 'hidden'), 1)
  } else {
    classes.push('hidden')
  }
}
window.onscroll = onScroll

export const ScrollToTop = () => (
  <AnchorLink id="to-top" href="#about" className={classes.join(" ")} title="Back to top"
              aria-label="Back to top">
    <span className="icon">
      <i className="fi icon-chevron-up"></i>
    </span>
  </AnchorLink>
)
