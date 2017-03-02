import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { Grid, Cell } from 'react-mdl';

export default class Home extends React.Component {
  render() {
    const company = {
        name : 'TELOS',
        desc : 'The Education You Want, The Way You Want It',
        descM : 'The best education, online and in-person. Free for 100 million people and growing!'
    }

    return (
      <div>
        <div className="main cthird">
          <Grid className="title">
            <Cell col={4}>
              <img className="logo" src="images/logo.png"/>
            </Cell>
            <Cell col={6}>
              <span className="name"> { company.name } </span>
            </Cell>
          </Grid>
          <div className="desc">
            <span className="top"> { company.desc } </span>
            <span className="bottom csecond"> { company.descM } </span>
          </div>
        </div>
      </div>
    )
  }
}