import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

injectTapEventPlugin()
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const App = () => (
  <MuiThemeProvider>
    <Root store={store} history={history} />
  </MuiThemeProvider>
);

render(
  <App />,
  document.getElementById('root')
)
