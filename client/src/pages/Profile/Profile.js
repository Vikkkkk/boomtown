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

const Profile = ({ classes }) => {
  return (
    <ItemsContainer>
      {({ userItemsData: { loading, error, user } }) => {
        console.log(user)
        if (loading) return '...lodading'
        if (error) return 'Error, Sorry bud'

        return (
          <div>
            <Card>
              <h1>
                <Avatar>
                  <Gravatar email={user.email} />
                </Avatar>
                {user.fullname}
              </h1>
              <Typography>
                {user.items.length}Items shared {user.borrowed.length} items
                borrowed
              </Typography>
            </Card>

            <Grid container className={classes.root} spacing={0}>
              {user.items.map(item => (
                <Grid item xs={4}>
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

export default withStyles(styles)(Profile)
