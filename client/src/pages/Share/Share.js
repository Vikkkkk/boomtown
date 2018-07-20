import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ShareForm from '../../components/ShareItemForm'

import styles from './styles'

const Share = ({ classes }) => {
  return (
    <div>
      <ShareForm />
    </div>
  )
}

export default withStyles(styles)(Share)
