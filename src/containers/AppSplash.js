import React, { Component } from 'react'

// Bottom and top parts
import Footer from '../components/Footer'
import Splash from '../components/Splash'
import Screen from '../components/Screen'

class MainContainer extends Component {

  constructor(props) {
    super(props);
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
        <Splash/>
        <Footer/>
      </div>
    )
  }
}

export default MainContainer
