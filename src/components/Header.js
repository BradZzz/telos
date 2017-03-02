import React, { PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { Grid, Cell } from 'react-mdl';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.tabs = this.props.tabs
    this.state = { value: 0 }
  }

  handleChange = (value) => {
    // This sets the value on the header page
    this.setState({ value: value })
    // This returns the value to the main controller
    this.props.callback(value)
  }

  renderTab = (tab, idx) => {
    return (
      <Tab className="tab" label={tab} value={idx} key={idx}>
      </Tab>
    )
  }

  render() {
    return (
      <Grid className="header">
        <Cell col={2}>
          <img className="logo" src="images/logo.png"/>
        </Cell>
        <Cell col={8} style={{ "padding-top": "15px" }}>
          <Tabs className="csecondary" tabItemContainerStyle={{ 'background-color':'transparent' }} value={this.state.value} onChange={this.handleChange}>
            { this.tabs.map(this.renderTab) }
          </Tabs>
        </Cell>
      </Grid>
    )
  }
}