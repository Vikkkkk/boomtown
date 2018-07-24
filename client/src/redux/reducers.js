import { combineReducers } from 'redux'
import ShareItemPreviewReducer from './modules/shareItemPreview'

export default combineReducers({
  shareItemPreview: ShareItemPreviewReducer
})
