import {FormattedMessage} from 'gatsby-plugin-intl'
import React from 'react'
import classNames from 'classnames'

export class Dropdown extends React.Component {
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

    return <div className={dropdownClasses}>
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu6"
                onClick={this.triggerMenu}>
          <span>{this.state.selected}</span>
          <span className="icon is-small">
            <i className="fi icon-chevron-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu6" role="menu">
        <div className="dropdown-content">
          {this.props.options.map((item, index) => {
            let itemClasses = classNames({
              'dropdown-item': true,
              'is-active': this.state.selected === item.value
            })
            return <a href="#" className={itemClasses} key={index} onClick={() => this.select(item.value)}>
              {item.displayName}
            </a>
          })}
        </div>
      </div>
    </div>
  }
}