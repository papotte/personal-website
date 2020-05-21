import {useIntl} from 'gatsby-plugin-intl'
import React from 'react'
import classNames from 'classnames'

const IntlOptions = (props) => {
  const intl = useIntl()
  const options = props.options
  return options.map((item, index) => {
    const displayName = intl.formatMessage({id: item.key + '.' + item.displayName})
    const value = intl.formatMessage({id: item.key + '.' + item.value})

    const itemClasses = classNames({
      'dropdown-item': true,
      'is-active': props.selected === value
    })
    return <a href="#" className={itemClasses} key={index} onClick={() => props.select(value)}>
      {displayName}
    </a>
  })
}

export class NavbarMenu extends React.Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = {
      selected: props.default || props.options[0].value,
      dropdownActive: false
    }
    this.triggerMenu = this.triggerMenu.bind(this)
    this.select = this.select.bind(this)
  }

  triggerMenu() {
    let dropdownStatus = !this.state.dropdownActive
    this.setState({...this.state, dropdownActive: dropdownStatus})
  }

  select(item) {
    this.setState({selected: item, dropdownActive: false})
    this.props.onChange(item)
  }

  render() {
    const dropdownClasses = classNames({
      'dropdown': true,
      'is-active': this.state.dropdownActive
    })

    const innerButton = this.props.icon ?
      <span className="icon"><i className={['fi icon-' + this.props.icon]} /></span>
      : <span>{this.state.selection}</span>

    return <div className={dropdownClasses}>
      <div className="dropdown-trigger">
        <a className="link is-dark has-dropdown" aria-haspopup="true" aria-controls="dropdown-menu6"
           onClick={this.triggerMenu}>
          {innerButton}
          <span className="icon is-small">
            <i className="fi icon-chevron-down" aria-hidden="true" />
          </span>
        </a>
      </div>
      <div className="dropdown-menu" id="dropdown-menu6" role="menu">
        <div className="dropdown-content">
          {this.props.intl ? this.getIntlOptions() : this.getOptions()}
        </div>
      </div>
    </div>
  }

  getOptions() {
    return this.props.options.map((item, index) => {
      const itemClasses = classNames({
        'dropdown-item': true,
        'is-active': this.state.selected === item.value
      })
      return <a href="#" className={itemClasses} key={index} onClick={() => this.select(item.value)}>
        {item.displayName}
      </a>
    })
  }

  getIntlOptions() {
    return <IntlOptions options={this.props.options} selected={this.state.selected} select={this.select} />
  }
}