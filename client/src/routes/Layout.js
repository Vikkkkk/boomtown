import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Items from '../pages/Items'
import Profile from '../pages/Profile'
import Share from '../pages/Share'
import Home from '../pages/Home'
import NavBar from '../components/NavBar'
import { ViewerContext } from '../context/ViewerProvider'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect,
//   NavLink
// } from 'react-router-dom'

export default () => (
  <ViewerContext.Consumer>
    {({ data, loading, error }) => {
      if (loading) return '...Loading!'
      if (!data || data.viewer) {
        return (
          <Switch>
            <Route exact path="/welcome" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        )
      }
      return (
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/items" component={Items} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Profile/:id" component={Profile} />
            <Route path="/welcome" component={Home} />
            <Route path="/share" component={Share} />
            {/* <Redirect from="*" to="/welcome" /> */}
            <Redirect to="/items" />
          </Switch>
        </Fragment>
      )
    }}
  </ViewerContext.Consumer>
)

// <Route
// exact
// path="/welcome"
// name="home"
// component={loadable({
//   loader: () => import("../pages/Home/Home"),
//   loading: FullScreenLoader
// })}
// />
