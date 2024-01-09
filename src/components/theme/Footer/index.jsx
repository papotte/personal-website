import {Container} from 'components/common'
import Data from 'data/config'
import {FormattedMessage} from 'gatsby-plugin-intl'
import React from 'react'
import social from './social'
import {Details, Flex, Links, Wrapper} from './styles'

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>{Data.legalName}</h2>
        <p>
          <FormattedMessage id={'footer.rights'} /> | {Data.foundingDate} |{' '}
          <FormattedMessage
            id={'footer.made'}
            values={{
              i: (...chunks) => (
                <span className="icon has-text-danger is-small">
                  <i className={'fi icon-' + chunks}></i>
                </span>
              ),
              a: () => (
                <a href={Data.url} rel="noopener noreferrer" target="_blank">
                  {Data.author}
                </a>
              ),
              react: () => (
                <a
                  href="https://reactjs.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="icon has-text-react is-small"
                  aria-label="ReactJS"
                >
                  <i className="fi icon-react"></i>
                </a>
              )
            }}
          />
        </p>
      </Details>
      <Links>
        {social.map(({id, name, link, icon}) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
            className="icon is-medium is-primary"
          >
            <i className={'fi icon-' + icon}></i>
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
)
