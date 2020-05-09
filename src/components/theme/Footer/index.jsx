import {Container} from 'components/common'
import Data from 'data/config'
import React from 'react'
import social from './social'
import {Details, Flex, Links, Wrapper} from './styles'

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>{Data.legalName}</h2>
        <span>
          © All rights are reserved | {Data.foundingDate} | Made with {' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a href={Data.url} rel="noopener noreferrer" target="_blank">
            {Data.author}
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({id, name, link, icon}) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
)
