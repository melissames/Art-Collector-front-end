import { combineReducers } from 'redux'
import { artworkReducer } from './artworkReducer'
import { collectionReducer } from './collectionReducer'

const rootReducer = combineReducers({
  artwork: artworkReducer,
  collection: collectionReducer
})

export default rootReducer;
