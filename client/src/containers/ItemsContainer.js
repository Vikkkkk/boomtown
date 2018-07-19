import { adopt } from 'react-adopt'
import { Query, Mutation } from 'react-apollo'
import React from 'react'

// @TODO: Uncommment this line when the ViewerProvider is added to the app.
// import { ViewerContext } from '../context/ViewerProvider'
// -------------------------------

import {
  ALL_TAGS_QUERY,
  ALL_ITEMS_QUERY,
  ALL_USER_ITEMS_QUERY,
  ADD_ITEM_MUTATION
} from '../apollo/queries'

const itemsData = ({ render }) => {
  return (
    <Query query={ALL_ITEMS_QUERY} variables={{ filter: null }}>
      {({ data: { items }, loading, error }) =>
        render({ items, loading, error })
      }
    </Query>
  )
}

const userItemsData = ({ userId, render }) => {
  return (
    <Query query={ALL_ITEMS_QUERY} variables={{ filter: null }}>
      {({ data: { user }, loading, error }) => render({ user, loading, error })}
    </Query>
  )
}

const tagData = ({ render }) => {
  return (
    <Query query={ALL_TAGS_QUERY} variables={{ filter: null }}>
      {({ data: { tags }, loading, error }) =>
        render({
          tags,
          loading,
          error
        })
      }
    </Query>
  )
}

const addItem = ({ render }) => {
  /**
   * @TODO: Use Apollo's <Mutation /> component to use the signup mutation.
   *
   * Note: Be sure to use `refetchQueries` to refresh Apollo's cache with the
   * latest items for the user.
   */
  return undefined
}
const ItemsContainer = adopt({
  // @TODO: Uncomment each line as you write the corresponding query.
  // tagData,
  itemsData,
  userItemsData
  // addItem
  // -------------------------------
})

export default ItemsContainer
