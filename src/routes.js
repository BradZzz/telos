import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import AppSplash from './containers/AppSplash'
import AppDemo from './containers/AppDemo'

export default <Router history={browserHistory}>
                   <Route path="/" component={AppSplash} />
                   <Route path="/demo" component={AppDemo} />
                </Router>