import React, { PropTypes } from 'react'
import { Grid, Cell } from 'react-mdl'

import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import { Tabs, Tab } from 'material-ui/Tabs'
import IconButton from 'material-ui/IconButton';

import ImageDehaze from 'material-ui/svg-icons/image/dehaze'
import {fullWhite} from 'material-ui/styles/colors';

import MediaQuery from 'react-responsive'

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.desktop = 1224
    this.mobile = 960
    this.tabs = this.props.tabs
    this.state = { value: 0, open: false }
  }

  handleChange = (value) => {
    // This sets the value on the header page
    this.setState({ value: value })
    // This returns the value to the main controller
    this.props.callback(value)
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  renderLogo = () => {
    return (
      <Cell col={2}>
        <img className="logo" src="images/logo.png"/>
      </Cell>
    )
  }

  renderTab = (tab, idx) => {
    return (
      <Tab className="tab" label={tab} value={idx} key={idx}>
      </Tab>
    )
  }

  renderMenu = (tab, idx) => {
    return (
      <MenuItem key={idx} primaryText={tab} />
    )
  }

  renderDropdown = () => {
    return (
      <div style={{ 'position' : 'absolute', 'width' : '100px', 'right' : '80px' }}>
        <IconButton
          onTouchTap={this.handleTouchTap}
          iconStyle={styles.largeIcon}
          style={styles.large}
        >
          <ImageDehaze color={fullWhite} />
        </IconButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            { this.tabs.map(this.renderMenu) }
          </Menu>
        </Popover>
      </div>
    )
  }

  render() {
    return (
      <Grid className="header">
        <MediaQuery minWidth={this.desktop}>
          { this.renderLogo() }
        </MediaQuery>
        <MediaQuery maxWidth={this.mobile}>
          { this.renderLogo() }
        </MediaQuery>
        <MediaQuery minWidth={this.desktop}>
          <Cell col={8} style={{ "padding-top": "15px" }}>
            <Tabs className="csecondary" tabItemContainerStyle={{ 'background-color':'transparent' }} value={this.state.value} onChange={this.handleChange}>
              { this.tabs.map(this.renderTab) }
            </Tabs>
          </Cell>
        </MediaQuery>
        <MediaQuery minWidth={this.mobile} maxWidth={this.desktop}>
          <Cell col={12} style={{ "padding-top": "15px" }}>
            <Tabs className="csecondary" tabItemContainerStyle={{ 'background-color':'transparent' }} value={this.state.value} onChange={this.handleChange}>
              { this.tabs.map(this.renderTab) }
            </Tabs>
          </Cell>
        </MediaQuery>
        <MediaQuery maxWidth={this.mobile}>
          { this.renderDropdown() }
        </MediaQuery>
      </Grid>
    )
  }
}