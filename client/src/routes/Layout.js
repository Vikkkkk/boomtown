import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Home from '../pages/Home'
import Items from '../pages/Items'
import Share from '../pages/Share'
import Profile from '../pages/Profile'
import { ViewerContext } from '../context/ViewerProvider'
import NavBar from '../components/NavBar'
export default () => (
  <ViewerContext.Consumer>
    {({ loading, error, viewer }) => {
      if (loading) return 'Loading...'
      if (!viewer) {
        return (
          <Switch>
            <Route exact path="/welcome" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        )
      }
      return (
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/items" component={Items} />
            <Route exact path="/share" component={Share} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:userid" component={Profile} />
            <Redirect to="/items" />
          </Switch>
        </React.Fragment>
      )
    }}
  </ViewerContext.Consumer>
)
