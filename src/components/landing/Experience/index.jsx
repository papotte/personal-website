import dev from 'assets/illustrations/world.svg'
import {Container} from 'components/common'
import React from 'react'
import {Details, ExperienceWrapper, Wrapper} from './styles'
import Timeline from './Timeline'

export const Experience = () => (
  <Wrapper id="experience">
    <ExperienceWrapper as={Container}>
      <Details>
        <h1 className="title">Work Experience</h1>
        <Timeline />
      </Details>
      <figure className="image">
        <img src={dev} alt="experience"/>
      </figure>
    </ExperienceWrapper>
  </Wrapper>
)
