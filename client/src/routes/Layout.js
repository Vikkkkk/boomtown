import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Items from '../pages/Items'
import Profile from '../pages/Profile'
import Share from '../pages/Share'
import Home from '../pages/Home'
import NavBar from '../components/NavBar'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect,
//   NavLink
// } from 'react-router-dom'

export default () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/items" component={Items} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Profile/:id" component={Profile} />
      <Route path="/welcome" component={Home} />
      <Route path="/share" component={Share} />
      <Redirect to="/items" />
    </Switch>
  </Fragment>
)
