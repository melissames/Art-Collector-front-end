import { combineReducers } from 'redux'
import { artworkReducer } from './artworkReducer'

const rootReducer = combineReducers({
  artworks: artworkReducer
})

export default rootReducer;
