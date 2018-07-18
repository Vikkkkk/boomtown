import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import {
  AppBar,
  Typography,
  Button,
  IconButton,
  Toolbar,
  withStyles
} from '@material-ui/core'
import styles from './styles'
import Logo from '../../images/boomtown.svg'
import NavMenu from './NavMenu'

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navBar}>
          <Link to="/items">
            <img src={Logo} alt="" />
          </Link>
          <NavMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
