import { combineReducers } from 'redux'

import comments from './comments/reducer'
import posts from './posts/reducer'
import users from './users/reducer'

export default combineReducers({
  comments,
  posts,
  users,
})
