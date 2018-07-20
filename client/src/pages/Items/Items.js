import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styles from './styles'
import ItemsContainer from '../../containers/ItemsContainer'
import moment from 'moment'
import Grid from '@material-ui/core/Grid'
import ItemCard from '../../components/ItemCard'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'

class Items extends React.Component {
  state = {
    spacing: '16'
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    const { classes } = this.props
    const { spacing } = this.state

    return (
      <ItemsContainer>
        {({ itemsData: { loading, error, items } }) => {
          if (loading) return '...lodading'
          if (error) return 'Error, Sorry bud'
          return (
            <Grid container className={classes.root} spacing={0}>
              {items.map(item => (
                <Grid item xs={4}>
                  <ItemCard key={item.id} {...item} />
                </Grid>
              ))}
            </Grid>
          )
        }}
      </ItemsContainer>
    )
  }
}

Items.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Items)
