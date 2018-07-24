import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ShareForm from '../../components/ShareItemForm'
import ItemCard from '../../components/ItemCard'

import styles from './styles'

const Share = ({ classes }) => {
  return (
    <div className={classes.main}>
      <ItemCard
        style={{ width: '420px' }}
        id={0}
        title={0}
        tags={[]}
        description={''}
        created={new Date()}
        itemowner={{ email: 'stu.com', fullname: 'Stuuuuuu' }}
      />
      <ShareForm />
    </div>
  )
}

export default withStyles(styles)(Share)
