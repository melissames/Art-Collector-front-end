export function artworkReducer(state = {allArtworks: [], artworkSearch: []}, action){
  switch(action.type){
    case 'LOADING_ARTWORKS':
      return {...state, loading: !state.loading }
    case 'FETCH_ALL_ARTWORKS':
      return {...state, loading: true, allArtworks: action.payload}
    case 'FETCH_ARTWORK_SEARCH':
      return {...state, loading: true, artworkSearch: action.payload }
    default:
      return state;
  }
};
