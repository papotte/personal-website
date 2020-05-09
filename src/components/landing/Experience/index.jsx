import {Container} from 'components/common'
import React from 'react'
import dev from '../../../assets/illustrations/skills.svg'
import {Details, ExperienceWrapper, Thumbnail, Wrapper} from './styles'

export const Experience = () => (
  <Wrapper id="experience">
    <ExperienceWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard dummy.
        </p>
        <button className="button is-primary is-link" href="#contact">
          Hire me
        </button>
      </Details>
    </ExperienceWrapper>
  </Wrapper>
)
