const defaultState = {
  collectionLoading: false,
  collectionSubmitted: false,
  allCollections: [],
  collectionSearch: []
}

export function collectionReducer(state = defaultState, action){
  // debugger
  switch(action.type){
    case 'FETCH_ALL_COLLECTIONS':
      return {...state, collectionLoading: true, allCollections: action.payload}
    case 'FETCH_COLLECTION_SEARCH':
      return {...state, collectionSubmitted: true, collectionSearch: action.payload}
    default:
      return state;
  }
};


// export default function artworkReducer(state = defaultState, action){
//   switch(action.type){
//     case 'FETCH_ALL_ARTWORKS':
//       return {...state, loading: true, allArtworks: action.payload}
//     case 'FETCH_ARTWORK_SEARCH':
//       return {...state, submitted: true, artworkSearch: action.payload}
//     default:
//       return state;
//   }
// };
