import Resume from 'data/resume'
import React from 'react'
import TimelineItem from './TimelineItem'
import {useIntl} from 'gatsby-plugin-intl'

const Timeline = () => {
  const intl = useIntl()
  const locale = intl.locale
  const years = new Set(Resume.work.map(item => new Date(item.startDate).getFullYear()))
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">{new Date().getFullYear()}</span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-accent" />
        <div className="timeline-content" />
      </div>
      {Array.from(years).map((year, i) => {
        let content = []
        content.push(
          <header key={i} className="timeline-header">
            <span className="tag is-accent">{year}</span>
          </header>
        )
        content.push(
          Resume.work
            .filter(work => new Date(work.startDate).getFullYear() === year)
            .map((item, j) => {
              return (
                <TimelineItem
                  key={j}
                  date={item.startDate}
                  company={item.company}
                  summary={item.summary[locale]}
                  tags={item.tags}
                />
              )
            })
        )
        return content
      })}
    </div>
  )
}

export default Timeline
