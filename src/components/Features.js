import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { Grid, Cell } from 'react-mdl';

export default class Features extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="main cthird">
          <Grid className="title">
            The features will be here
          </Grid>
        </div>
      </div>
    )
  }
}