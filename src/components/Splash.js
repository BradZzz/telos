import React, { PropTypes } from 'react'
import { Textfield, Grid, Cell } from 'react-mdl';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive'

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.copy = "Education"
    this.copy2 = "in the 21st Century."
  }

  render() {
    return (
      <div className="splash">
        <img src="../images/telos_long.png" style={{ 'width' : '200px', 'margin' : '5em 0 0 10em' }}/>
        <div className="content">
          <h2>{ this.copy }</h2>
          <h2>{ this.copy2 }</h2>
        </div>
      </div>
    )
  }
}