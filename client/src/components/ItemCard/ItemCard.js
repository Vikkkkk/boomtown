import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import moment from 'moment'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import styles from './styles'

function ItemCard(props) {
  const { classes, item } = props
  console.log(item)
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={item.imageurl} title="" />
      <CardContent>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title={item.itemowner.fullname}
          subheader={moment(item.created).fromNow()}
        />
        <Typography gutterBottom variant="headline" component="h2">
          {item.title}
        </Typography>
        <Typography component="p">{item.description}</Typography>
        <Typography component="p">
          {' '}
          {item.tags.length > 0
            ? item.tags.map(tag => tag.title).join(', ')
            : null}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" color="secondary">
          Borrow
        </Button>
      </CardActions>
    </Card>
  )
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ItemCard)
