import React, { PropTypes } from 'react'
import { Textfield, Grid, Cell } from 'react-mdl'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import MediaQuery from 'react-responsive'
import { vh } from 'react-native-viewport-units'

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
    this.inputs = ['Name','Email']
    this.teaser = "Reach out to learn more."
    this.copy = "Education"
    this.copy2 = "in the 21st Century."
    this.state = { value: 0, pick: 0 }
  }

  handlePick = (event, index, value) => this.setState({value : value})

  handleChange = (value) => {
    console.log(value)
    this.setState({ pick: value })
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

  dropClass = () => {
    return "dropdown" + (this.state.value > 0 ? " selected" : "")
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
            value={this.state.value}
            onChange={this.handlePick}
            className={this.dropClass()}
          >
            <MenuItem value={1} primaryText="I am a learner." />
            <MenuItem value={2} primaryText="I am an educator." />
            <MenuItem value={3} primaryText="I am a public institution." />
          </SelectField>
          <div>
            <RaisedButton className="submit" label="Submit" primary={true} style={styles.button}/>
          </div>
        </div>
      </div>
    )
  }
}