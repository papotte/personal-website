import React, {useState} from 'react'
import classNames from 'classnames'
import {changeLocale, useIntl} from 'gatsby-plugin-intl'

const IntlOptions = props => {
  const intl = useIntl()
  const options = props.options
  return options.map((item, index) => {
    const displayName = intl.formatMessage({id: item.key + '.' + item.displayName})
    const value = intl.formatMessage({id: item.key + '.' + item.value})

    const itemClasses = classNames({
      'dropdown-item': true,
      'is-active': props.selected === value
    })
    return (
      <a href="#" className={itemClasses} key={index} onClick={() => props.select(value)}>
        {displayName}
      </a>
    )
  })
}

const NavbarMenu = ({icon, intl, langOptions}) => {
  const intl2 = useIntl()

  const [selection, setSelection] = useState(intl2.defaultLocale)
  console.log('selection', selection)
  console.log(intl2)

  const [dropdownActive, setDropdownActive] = useState(false)

  const triggerMenu = () => {
    setDropdownActive(!dropdownActive)
  }

  const doSelect = value => {
    setSelection(value)
    setDropdownActive(false)
    changeLocale(value)
  }

  const innerButton = icon ? (
    <span className="icon">
      <i className={['fi icon-' + icon]} />
    </span>
  ) : (
    <span>{selection}</span>
  )

  return (
    <div
      className={classNames({
        dropdown: true,
        'is-active': dropdownActive
      })}
    >
      <div className="dropdown-trigger">
        <a
          className="link is-dark has-dropdown"
          aria-haspopup="true"
          aria-controls="dropdown-menu6"
          onClick={triggerMenu}
        >
          {innerButton}
          <span className="icon is-small">
            <i className="fi icon-chevron-down" aria-hidden="true" />
          </span>
        </a>
      </div>
      <div className="dropdown-menu" id="dropdown-menu6" role="menu">
        <div className="dropdown-content">
          {intl ? (
            <IntlOptions options={langOptions} selected={selection} select={doSelect} />
          ) : (
            langOptions.map((item, index) => {
              const itemClasses = classNames({
                'dropdown-item': true,
                'is-active': selection === item.value
              })
              return (
                <a href="#" className={itemClasses} key={index} onClick={() => doSelect(item.value)}>
                  {item.displayName}
                </a>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default NavbarMenu
