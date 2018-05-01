
const URL = "http://localhost:3000/api/v1/artworks"

export let fetchArtworkSearch = (searchItem) => {
  return dispatch => {
    dispatch({type: 'LOADING_ARTWORKS'});
    return fetch(`${URL}/?q=${searchItem}`)
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_ARTWORK_SEARCH', payload: json}));
  }
}

export let fetchAllArtworks = () => {
  return dispatch => {
    dispatch({type: 'LOADING_ARTWORKS'})
    return fetch(`${URL}`)
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_ALL_ARTWORKS', payload: json}))
  }
}
