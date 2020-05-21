import {Container} from 'components/common'
import Resume from 'data/resume'
import {FormattedMessage} from 'gatsby-plugin-intl'
import React from 'react'
import {Details} from '../Experience/styles'
import SkillsList from './SkillsList'
import {SkillsWrapper, Wrapper} from './styles'

const skills = Resume.skills || []
export const Skills = () => (
  <Wrapper id="skills">
    <SkillsWrapper as={Container}>
      <Details>
        <h1 className="title"><FormattedMessage id={'sections.skills.title'} /></h1>
        <div className="columns">
          <div className="column is-6">
            <div className="column">
              <div className="has-text-centered">
                <span className="icon is-large">
                  <i className="fi icon-code"/>
                </span>
                <h2 className="title is-5 has-text-dark">
                  <FormattedMessage id={'sections.skills.languages'} />
                </h2>
              </div>
              <SkillsList
                skills={skills
                  .filter(skill => skill.keywords.includes('Language'))
                  .reduce((obj, item) => {
                    obj[item.name] = item.level
                    return obj
                  }, {})}
              />
            </div>
            <div className="column">
              <div className="has-text-centered">
                <span className="icon is-large">
                  <i className="fi icon-laptop"/>
                </span>
                <h2 className="title is-5 has-text-dark">
                  <FormattedMessage id={'sections.skills.frameworks'} />
                </h2>
              </div>
              <SkillsList
                skills={skills
                  .filter(skill => skill.keywords.includes('Framework'))
                  .reduce((obj, item) => {
                    obj[item.name] = item.level
                    return obj
                  }, {})}
              />
            </div>
          </div>
          <div className="column is-6">
            <div className="has-text-centered">
              <span className="icon is-large">
                <i className="fi icon-cog"/>
              </span>
              <h2 className="title is-5 has-text-dark">
                <FormattedMessage id={'sections.skills.tools'} />
              </h2>
            </div>
            <SkillsList
              skills={skills
                .filter(skill => skill.keywords.includes('Tools'))
                .reduce((obj, item) => {
                  obj[item.name] = item.level
                  return obj
                }, {})}
            />
          </div>
        </div>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
