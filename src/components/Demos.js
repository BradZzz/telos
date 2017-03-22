import React, { PropTypes } from 'react'
import { Textfield, Grid, Cell } from 'react-mdl';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive'
import { vh } from 'react-native-viewport-units'

const styles = {
    button: {
        width: 300,
        height: 50,
        padding: 0,
        color: '#eeeeee'
    }
};

export default class Demos extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = ['username','password']
    this.teaser = "login:"
  }

  renderInput = (input, idx) => {
    return (
      <div key={idx}>
        <Textfield
            className="input"
            onChange={this.handleChange}
            label={input}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="splash" style={{ height:100*vh }}>
        <img src="../images/telos_long.png" style={{ 'width' : '200px' }}/>
        <div className="content">
          <span style={{ 'font-size' : '1.2em', 'color' : '#eeeeee' }}>{ this.teaser }</span>
          { this.inputs.map(this.renderInput) }
          <div style={{ 'margin-top' : '1em'}}>
            <RaisedButton href="http://ec2-54-209-70-240.compute-1.amazonaws.com/login" target="_blank" className="login" label="Login" primary={true} style={styles.button}/>
          </div>
        </div>
      </div>
    )
  }
}