import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ItemsContainer from '../../containers/ItemsContainer'
import Grid from '@material-ui/core/Grid'
import ItemCard from '../../components/ItemCard'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import Gravatar from 'react-gravatar'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import PropTypes from 'prop-types';

const Profile = ({ classes }) => {
  return (
    <ItemsContainer>
      {({ userItemsData: { loading, error, user } }) => {
        if (loading) return '...lodading'
        if (error) return 'Error, Sorry bud'

        return (
          <div className={classes.root}>
            <Card className={classes.card}>
              <h1 className={classes.avatarName}>
                <Avatar className={classes.avatarImage}>
                  <Gravatar email={user.email} />
                </Avatar>
                {user.fullname}
              </h1>
              <Typography>
                {user.items.length}Items shared {user.borrowed.length} items
                borrowed
              </Typography>
              <Typography>"{user.bio}"</Typography>
            </Card>

            <Grid container className={classes.grid} spacing={0}>
              {user.items.map(item => (
                <Grid key={item.id} id={item.id} item xs={4}>
                  <ItemCard key={item.id} item={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        )
      }}
    </ItemsContainer>
  )
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withStyles(styles)(Profile)
