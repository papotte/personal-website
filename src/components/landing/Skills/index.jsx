import {Container} from 'components/common'
import React from 'react'
import dev from '../../../assets/illustrations/skills.svg'
import {Details, SkillsWrapper, Thumbnail, Wrapper} from './styles'

export const Skills = () => (
  <Wrapper id="skills">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="Skills" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard dummy.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
