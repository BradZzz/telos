import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Bottom and top parts
import Header from '../components/Header'
import Footer from '../components/Footer'

// The middle parts
import Home from '../components/Home'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Demos from '../components/Demos'
import Customers from '../components/Customers'
import Donate from '../components/Donate'
import Splash from '../components/Splash'

// Helpers
import Screen from '../components/Screen';

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.tabs = ['Splash', 'Home','Features','Pricing',/*'Demos',*/'Customers','Donate']
    this.pages = [<Splash />, <Home />, <Features />, <Pricing />, /*<Demos />,*/ <Customers />, <Donate />]
    this.state = { page: 0 }
  }

  handleChange = (value) => {
    console.log("Clicked: " + value)
    this.setState({ page: value })
  }

  render() {
    return (
      <div>
        <Screen/>
        <Demos/>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, {})( MainContainer )
