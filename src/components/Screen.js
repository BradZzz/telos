import React, { PropTypes } from 'react'
import $ from 'jquery'
import _ from 'underscore'
import ReactDOM from 'react-dom'

export default class Screen extends React.Component{

  constructor (props) {
    super()
    this._handleWindowResize = _.debounce(this._handleWindowResize.bind(this), 100)
    this.state = { width : 0 }
    this._isMounted = false
  }

  getScreen () {
    return {
      isTablet: 961 > this.state.width && this.state.width > 600,
      isMobile: this.state.width < 601,
      isDesktop: this.state.width > 960
    }
  }

  componentDidMount () {
    this._isMounted = true
    window.addEventListener('resize', this._handleWindowResize)
  }

  componentWillUnmount () {
    this._isMounted = false
    window.removeEventListener('resize', this._handleWindowResize)
  }

  _handleWindowResize () {
    if (this._isMounted) {
      this.setState({ width : ReactDOM.findDOMNode(this._containerTarget).offsetWidth })
    }
  }

  render() {
    return (
      <span
        ref = { node => {
          if (node !== null) {
            this._containerTarget = node;
            if (!this._isMounted) {
              this._isMounted = true;
              this._handleWindowResize();
            }
          }
        }}
      />
    )
  }
}