import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styles from './styles'
import ItemsContainer from '../../containers/ItemsContainer'

const Items = ({ classes }) => {
  return (
    <ItemsContainer>
      {({ itemsData: { loading, error, items } }) => {
        if (loading) return '...lodading'
        if (error) return 'Error, Sorry bud'
        return (
          <div>
            {items.map(item => (
              <div>
                <br />
                <h1>{item.title}</h1>
                <div>Descriptoion: {item.description}</div>
                Tags: {item.tags.map(tag => <div>{tag.title}</div>)}
                <br />
              </div>
            ))}
          </div>
        )
      }}
    </ItemsContainer>
  )
}

export default withStyles(styles)(Items)
