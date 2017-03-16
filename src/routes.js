import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import AppSplash from './containers/AppSplash'
import AppDemo from './containers/AppDemo'

export default <Router history={hashHistory}>
                   <Route path="/" component={AppSplash} />
                   <Route path="/demo" component={AppDemo} />
                </Router>