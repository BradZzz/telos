import React, { PropTypes } from 'react'
import { Textfield, Grid, Cell } from 'react-mdl'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import MediaQuery from 'react-responsive'
import { vh } from 'react-native-viewport-units'
import * as META from './atoms/meta/meta'
import * as DATA from '../databases/database'

const styles = {
  button: {
    width: 300,
    height: 50,
    padding: 0,
  }
};

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.inputs = ['name','email']
    this.dropdown = ['I am a learner.', 'I am an educator.', 'I am a public institution.']
    this.teaser = "Reach out to learn more."
    this.copy = "Education"
    this.copy2 = "in the 21st Century."
    this.state = { usrtype: 0, name: "", email: "", ip: "" }
  }

  handlePick = (event, index, value) => this.setState({ usrtype : value })

  fieldChange = (event) => {
    console.log(event.target.id)
    console.log(event.target.value)

    this.setState({
      [event.target.id] : event.target.value,
    })
  }

  componentDidMount() {
    fetch('https://api.ipify.org?format=json').then(r => r.json())
          .then(data => {
            console.log(data)
            if ('ip' in data) {
              this.setState({ ip : data.ip })
            }
          }).catch(e => console.log(e))
  }

  submit = (event) => {
    console.log(this.state)
    const { usrtype, name, email, ip } = this.state
    if (usrtype && name && email){
      const payload = {
        type : usrtype,
        name : name,
        email : email,
        ip : ip,
      }
      DATA.DB.ref('users/' + window.btoa(email)).set(payload)
    } else {
      alert("Please fill out all fields before submitting")
    }
  }

  renderInput = (input, idx) => {
    return (
      <div key={idx}>
        <Textfield
          id={input}
          className="input"
          onChange={this.fieldChange}
          label={input}
        />
      </div>
    )
  }

  dropClass = () => {
    return "dropdown" + (this.state.usrtype > 0 ? " selected" : "")
  }

  render() {
    return (
      <div className="footer" style={{ height:100*vh }}>
        <div className="underlay"></div>
        <div className="content">
          <span className="teaser">{ this.teaser }</span>
          { this.inputs.map(this.renderInput) }
          <SelectField
            floatingLabelText="Who are you?"
            value={ this.state.usrtype }
            onChange={this.handlePick}
            className={this.dropClass()}>
            <MenuItem value={1} primaryText={ this.dropdown[0] } />
            <MenuItem value={2} primaryText={ this.dropdown[1] } />
            <MenuItem value={3} primaryText={ this.dropdown[2] } />
          </SelectField>
          <div>
            <RaisedButton className="submit" label="Submit" primary={true} style={styles.button} onClick={ this.submit }/>
          </div>
        </div>
      </div>
    )
  }
}