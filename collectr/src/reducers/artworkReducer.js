const defaultState = {
  loading: false,
  submitted: false,
  collectionLoading: false,
  colorLoading: false,
  allArtworks: [],
  artworkSearch: [],
  allCollections: [],
  colorImage: []
}

export default function artworkReducer(state = defaultState, action){
  switch(action.type){
    case 'FETCH_ALL_ARTWORKS':
      return {...state, loading: true, allArtworks: action.payload}
    case 'FETCH_ARTWORK_SEARCH':
      return {...state, submitted: true, artworkSearch: action.payload}
    case 'FETCH_ALL_COLLECTIONS':
      return {...state, collectionLoading: true, allCollections: action.payload}
    case 'FETCH_COLOR_IMAGE':
      return {...state, colorLoading: true, colorImage: action.payload}
    default:
      return state;
  }
};
