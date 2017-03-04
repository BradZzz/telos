import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { Grid, Cell } from 'react-mdl';

import MediaQuery from 'react-responsive'

export default class Home extends React.Component {

  desktop = 1224
  mobile = 960

  render() {
    const company = {
        name : 'TELOS',
        desc : 'The Education You Want, The Way You Want It',
        descM : 'The best education, online and in-person. Free for 100 million people and growing!'
    }

    return (
      <div>
        <div className="main cthird">
          <MediaQuery minWidth={this.mobile}>
            <Grid className="title">
              <Cell col={4}>
                <img className="logo" src="images/logo.png"/>
              </Cell>
              <Cell col={6}>
                <span className="name"> { company.name } </span>
              </Cell>
            </Grid>
          </MediaQuery>
          <MediaQuery maxWidth={this.mobile}>
            <div className="title" style={{ 'height': '200px' }}>
              <p style={{ 'text-align' : 'center', 'font-size' : '5em', 'padding-top': '60px' }}> { company.name } </p>
            </div>
          </MediaQuery>
          <div className="desc">
            <span className="top"> { company.desc } </span>
            <span className="bottom csecond"> { company.descM } </span>
          </div>
        </div>
      </div>
    )
  }
}