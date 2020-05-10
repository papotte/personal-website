import React from 'react'
import ProgressBar from './ProgressBar'

function buildSkills(skills) {
  const progressBars = []
  let counter = 0
  Object.entries(skills).forEach(([key, value]) => {
    progressBars.push(
      <li key={counter}>
        <ProgressBar key={counter} text={key} level={value} />
      </li>
    )
    counter++
  })
  return progressBars
}

function SkillsList(props) {
  const {skills} = props
  return <ul className="skill-list">{buildSkills(skills)}</ul>
}

export default SkillsList
