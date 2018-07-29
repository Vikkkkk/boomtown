import React from 'react'
// import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import AuthContainer from '../../../containers/AuthContainer'
class NavMenu extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state

    return (
      <AuthContainer>
        {({ logout }) => (
          <div>
            <IconButton
              aria-label="More"
              aria-owns={anchorEl ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <Link to="/profile">
                <MenuItem onClick={this.handleClose}>Your Profile</MenuItem>
              </Link>
              <MenuItem onClick={() => logout.mutation()}>Signout</MenuItem>
            </Menu>
          </div>
        )}
      </AuthContainer>
    )
  }
}

export default NavMenu
