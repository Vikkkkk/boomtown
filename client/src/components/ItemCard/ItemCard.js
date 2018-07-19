import React, { Component } from 'react'
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

// export default class ItemCard extends Component {
//   render() {
//     return (
//       <div>
//         <br />
//         <div>BIG OL PICTURE</div>
//         <div>Avatar</div>
//         <p>{this.props.itemowner.fullname}</p>
//         <p>{moment(this.props.created).fromNow()}</p>
//         <h1>{this.props.title}</h1>
//         Tags: {this.props.tags.map(tag => <div key={tag.id}>{tag.title}</div>)}
//         <div>Descriptoion: {this.props.description}</div>
//         <button>Borrow</button>
//         <br />
//       </div>
//     )
//   }
// }

function ItemCard(props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image="#" title="" />
        <CardContent>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title={props.itemowner.fullname}
            subheader={moment(props.created).fromNow()}
          />
          <Typography gutterBottom variant="headline" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Borrow
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ItemCard)
