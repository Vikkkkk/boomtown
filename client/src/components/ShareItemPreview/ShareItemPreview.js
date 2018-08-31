import React from 'react'
import ItemCard from '../../components/ItemCard'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const ShareItemPreview = props => {
  return <ItemCard item={props.shareItemPreview} />
}

const mapStateToProps = state => {
  return {
    shareItemPreview: state.shareItemPreview
  }
}


ShareItemPreview.propTypes = {
  dispatch: PropTypes.func.isRequired,
  shareItemPreview: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(ShareItemPreview)
