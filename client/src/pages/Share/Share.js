import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ShareForm from '../../components/ShareItemForm'
import ShareItemPreview from '../../components/ShareItemPreview'
import styles from './styles'

const Share = ({ classes }) => {
  return (
    <div className={classes.main}>
      <ShareItemPreview />
      <ShareForm />
    </div>
  )
}

export default withStyles(styles)(Share)
