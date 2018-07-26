import { withStyles, Grid } from '@material-ui/core'
import React from 'react'
import styles from './styles'
import ShareForm from '../../components/ShareItemForm'
import ShareItemPreview from '../../components/ShareItemPreview'

const Share = ({ classes }) => {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.root}
    >
      <Grid item xs={4}>
        <ShareItemPreview />
      </Grid>
      <Grid item xs={6}>
        <ShareForm />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Share)
