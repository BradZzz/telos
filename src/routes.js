import React from 'react'
import { Router, Route, hashHistory, Redirect } from 'react-router'
import AppSplash from './containers/AppSplash'
import AppDemo from './containers/AppDemo'

export default <Router history={hashHistory}>
                   <Redirect from="/" to="/splash" />
                   <Route path="/splash" component={AppSplash} />
                   <Route path="/demo" component={AppDemo} />
                </Router>