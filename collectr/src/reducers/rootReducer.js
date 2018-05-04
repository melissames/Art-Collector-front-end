import { combineReducers } from 'redux'
import { artworkReducer } from './artworkReducer'
import { collectionReducer } from './collectionReducer'

const rootReducer = combineReducers({
  artworks: artworkReducer,
  collections: collectionReducer
})

export default rootReducer;
