import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { Grid, Cell } from 'react-mdl';

import MediaQuery from 'react-responsive'

export default class Features extends React.Component {

  constructor(props) {
    super(props)
    this.mobile = 960
    this.title = "Headline"
    this.desc = "Telos’ success depends on a large number of students, with a negligible marginal cost per student. Revenue will be generated through a combination of sponsor funding, student subscriptions, and advertising. Sponsors will provide nominal funding per learner to make Telos free in certain geographic markets. Elsewhere, Telos will offer a freemium ad-supported model."
  }

  render() {
    return (
      <div>
        <div className="main cthird">
          <Grid className="full subtleb" style={{ "padding" : "0px" }}>
            <MediaQuery minWidth={this.mobile}>
              <Cell className="defBackPlain" style={{ "padding-top" : "15px", "margin" : "0px", "position" : "relative", "width":"325px" }}>
                <img src="images/logo.png" style={{ "position": "absolute", "left": "-5em", "width": "600px" }}/>
              </Cell>
            </MediaQuery>
            <Cell col={6} style={{ "padding-top": "15px", "margin" : "1em auto 0 auto", "color" : "black" }}>
              <h1 className="header" style={{ "margin": "1.3em 0px 0px 0px", "height" : "15vh" }}>
                { this.title }
              </h1>
              <h3 style={{ "font-size" : "1.7em", "margin-top" : "12px" }}>
                { this.desc }
              </h3>
            </Cell>
          </Grid>
        </div>
      </div>
    )
  }
}