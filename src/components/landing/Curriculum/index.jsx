import pdfFile from 'assets/cv.pdf'
import {Container} from 'components/common'
import {SimpleHeader} from 'components/theme'
import React, {PureComponent} from 'react'
import AllPages from './allPages'
import {IntroWrapper, Wrapper} from './styles'
import throttle from 'lodash.throttle'

export class Curriculum extends PureComponent {
  constructor(props) {
    super(props)
    this.file = pdfFile
    this.state = {width: null}
  }

  componentDidMount() {
    this.setDivSize()
    window.addEventListener('resize', throttle(this.setDivSize, 500))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', throttle(this.setDivSize, 500))
  }

  setDivSize() {
    this.setState({width: this.pdfWrapper.getBoundingClientRect().width})
  }

  render() {
    return (
      <Wrapper id="about">
        <SimpleHeader />
        <IntroWrapper as={Container} ref={ref => (this.pdfWrapper = ref)}>
          <div className="all-page-container">
            <AllPages width={this.state.width} pdf={this.file} />
          </div>
        </IntroWrapper>
      </Wrapper>
    )
  }
}
