import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { Grid, Cell } from 'react-mdl';

export default class Pricing extends React.Component {

  constructor(props) {
    super(props);
    this.header = {
      top : "Headline Right Here",
      top_desc : "Telos’ success depends on a large number of students, with a negligible marginal cost per student. Revenue will be" +
                     "generated through a combination of sponsor funding, student subscriptions, and advertising. Sponsors will provide" +
                     "nominal funding per learner to make Telos free in certain geographic markets. Elsewhere, Telos will offer a " +
                     "freemium ad-supported model.",
      bot : "10%",
      bot_desc : "Stats, Tables, Charts, Put ‘em here",
    }
  }

  render() {
    return (
      <div>
        <div className="main cthird">
          <Grid className="full" style={{ "padding" : "0px" }}>
            <Cell style={{ "margin" : "0px", "text-align" : "center" }}>
              <div className="half cfirstb" style={{ "padding" : "1em" }}>
                <h3 className="cfirst">
                  { this.header.top }
                </h3>
                <p>
                  { this.header.top_desc }
                </p>
              </div>
              <div className="half cfirstaltb" style={{ "padding-top" : "3em" }}>
                <h1 className="cfirst">
                  { this.header.bot }
                </h1>
                <p>
                  { this.header.bot_desc }
                </p>
              </div>
            </Cell>
            <Cell col={8} style={{ "margin" : "0" }}>
              <div style= {{ "position" : "absolute", "left" : "55%", "top" : "20%" }}>
                <img src="images/bust.png" style={{ "width": "300px", "margin" : "auto", "display" : "block" }}/>
              </div>
              <div className="overlaybdark" style={{ "position" : "absolute", "min-width" : "100%", "min-height" : "100%" }}>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    )
  }
}