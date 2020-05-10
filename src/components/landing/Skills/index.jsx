import codeIcon from 'assets/icons/code.svg'
import cogsIcon from 'assets/icons/cogs.svg'
import laptopIcon from 'assets/icons/laptop.svg'
import {Container} from 'components/common'
import Resume from 'data/resume.js'
import React from 'react'
import SkillsList from './SkillsList'
import {SkillsWrapper, Wrapper} from './styles'

console.log(Resume.skills)
const skills = Resume.skills || []
export const Skills = () => (
  <Wrapper id="skills">
    <SkillsWrapper as={Container}>
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="column">
              <div className="has-text-centered">
              <span className="icon is-large">
                <img src={codeIcon} alt="code" />
              </span>
                <h2 className="title is-5 has-text-dark">Languages</h2>
              </div>
              <SkillsList
                skills={skills
                  .filter(skill => skill.keywords.includes("Language"))
                  .reduce((obj, item) => {
                    obj[item.name] = item.level
                    return obj
                  }, {})}
              />
            </div>
            <div className="column">
              <div className="has-text-centered">
              <span className="icon is-large">
                <img src={laptopIcon} alt="laptop" />
              </span>
                <h2 className="title is-5 has-text-dark">Frameworks</h2>
              </div>
              <SkillsList
                skills={skills
                  .filter(skill => skill.keywords.includes("Framework"))
                  .reduce((obj, item) => {
                    obj[item.name] = item.level
                    return obj
                  }, {})}
              />
            </div>
          </div>
          <div className="column is-6">
            <div className="has-text-centered">
              <span className="icon is-large has-text-accent">
                <img src={cogsIcon} alt="cogs" />
              </span>
              <h2 className="title is-5 has-text-dark">Tools</h2>
            </div>
            <SkillsList
              skills={skills
                .filter(skill => skill.keywords.includes("Tools"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level
                  return obj
                }, {})}
            />
          </div>
        </div>
      </div>
    </SkillsWrapper>
  </Wrapper>
)
