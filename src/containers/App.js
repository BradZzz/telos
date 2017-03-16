import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage,
  inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {})(App)
