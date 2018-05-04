const defaultState = {
  loading: false,
  submitted: false,
  allCollections: [],
  collectionSearch: []
}

export default function rootReducer(state = defaultState, action){
  switch(action.type){
    case 'FETCH_ALL_ARTWORKS':
      return {...state, loading: true, allCollections: action.payload}
    case 'FETCH_COLLECTION_SEARCH':
      return {...state, submitted: true, collectionSearch: action.payload}
    default:
      return state;
  }
};
