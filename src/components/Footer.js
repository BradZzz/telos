import React, { PropTypes } from 'react'
import { Textfield, Grid, Cell } from 'react-mdl';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    button: {
        width: 160,
        height: 66,
        padding: 0
    }
};

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.inputs = ['Name','Email']
    this.teaserTitle = "Telos how we can help you accomplish your dreams!"
    this.teaserDesc = "We are built by former students to solve your frustrations surrounding traditional education institutions."
    this.tagPhrase = "Sign-up and we'll let you know when we are accepting more students!"
    this.legal = "© 2017 by Telos.io |"
    this.made = " lovingly made in Seattle"
    this.correspond = "inspire@telos.io"
    this.state = { value: 0 }
  }


  handleChange = (value) => {
    console.log("Clicked: " + value)
    this.setState({ value: value })
  }

  renderInput = (input, idx) => {
    return (
      <Cell col={4} key={idx}>
        <Textfield
            className="input"
            onChange={this.handleChange}
            label={input}
        />
      </Cell>
    )
  }

  render() {
    return (
      <div className="footer">
        <div className="content">
          <div className="teaser">
            <div className="ttitle cfirst">
              { this.teaserTitle }
            </div>
            <div className="tdesc csecond">
              { this.teaserDesc }
            </div>
          </div>
          <div>
            <span className="tag cthird">
              { this.tagPhrase }
            </span>
          </div>
          <Grid>
            { this.inputs.map(this.renderInput) }
            <Cell col={4} className="submit">
              <RaisedButton label="Submit" primary={true} style={styles.button}/>
            </Cell>
          </Grid>
          <div className="legal cfirst">
            <div>
              <span className="csecond">
                { this.legal }
              </span>
              { this.made }
            </div>
            <div className="lcorresp">
              { this.correspond }
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    )
  }
}