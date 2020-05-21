import React from 'react'
import {FormattedDate} from 'gatsby-plugin-intl'

const TimelineItem = (props) => {
  return (
    <div className="timeline-item is-accent">
      <div className="timeline-marker is-icon">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading is-4">
          <FormattedDate value={props.date}
                         year={'numeric'}
                         month={'long'} />
        </p>
        <h1 className="title is-5">{props.company}</h1>
        <p style={{maxWidth: '25em'}} className="is-size-6">
          {props.summary}
        </p>
        <div className="tags are-small is-multiline columns">
          {props.tags.map((item, j) => {
            return <div key={j} className="tag is-energized is-light">{item}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default TimelineItem
