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
import NavigationIcon from '@material-ui/icons/Navigation'
import AddIcon from '@material-ui/icons/Add'

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navBar}>
          <Link to="/items">
            <img src={Logo} alt="" />
          </Link>
          <div className={classes.shareButton}>
            <Link to="/share">
              <Button
                variant="extendedFab"
                aria-label="Delete"
                className={classes.button}
                color="primary"
              >
                <AddIcon color="secondary" />
                SHARE SOMETHING
              </Button>
            </Link>
            <NavMenu />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
