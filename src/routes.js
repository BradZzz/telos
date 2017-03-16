import React from 'react'
import { Router, Route, hashHistory, Redirect, IndexRoute } from 'react-router'
import App from './containers/App'
import AppSplash from './containers/AppSplash'
import AppDemo from './containers/AppDemo'

export default <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={AppSplash}/>
    <Route path="demo" component={AppDemo}/>
  </Route>
</Router>