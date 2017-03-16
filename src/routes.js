import React from 'react'
import { Router, Route, browserHistory, Redirect, IndexRoute } from 'react-router'
import App from './containers/App'
import AppSplash from './containers/AppSplash'
import AppDemo from './containers/AppDemo'

//export default <Router history={hashHistory}>
//                   <Route path="/" component={AppSplash} />
//                   <Route path="/demo" component={AppDemo} />
//                </Router>


//export default <Route path="/" component={App}>
//   <Route path="/" component={AppSplash} />
//   <Route path="demo" component={AppDemo} />
//</Route>

export default <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={AppSplash}/>
    <Route path="demo" component={AppDemo}/>
  </Route>
</Router>