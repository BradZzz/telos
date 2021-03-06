import React, { PropTypes } from 'react'
import { Textfield, Grid, Cell } from 'react-mdl';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive'
import { vh } from 'react-native-viewport-units'

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.copy = "Education"
    this.copy2 = "in the 21st Century."
  }

  render() {
    return (
      <div className="splash" style={{ height:100*vh }}>
        <img src="../images/telos_long.png" style={{ 'width' : '200px' }}/>
        <div className="content">
          <h2>{ this.copy }</h2>
          <h2>{ this.copy2 }</h2>
        </div>
      </div>
    )
  }
}