import {FormattedMessage} from 'gatsby-plugin-intl'
import React from 'react'

const progress = {
  Advanced: 100,
  Proficient: 80,
  Intermediate: 55,
  Basic: 33
}

function ProgressBar(props) {
  const {level, text} = props
  return (
    <div>
      <span className="title is-6 is-spaced has-text-dark">{text}</span>
      <span className="subtitle is-7 skill-percentage">
        <FormattedMessage id={'sections.skills.level.' + level} />
      </span>
      <progress className="progress is-accent" value={progress[level]} max="100">
        {progress[level]}%
      </progress>
    </div>
  )
}

export default ProgressBar
