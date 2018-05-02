const defaultState = {
  loading: false,
  submitted: false,
  allArtworks: [],
  artworkSearch: []
}

export default function rootReducer(state = defaultState, action){
  switch(action.type){
    case 'FETCH_ALL_ARTWORKS':
      return {...state, loading: true, allArtworks: action.payload}
    case 'FETCH_ARTWORK_SEARCH':
      return {...state, submitted: true, artworkSearch: action.payload}
    default:
      return state;
  }
};
