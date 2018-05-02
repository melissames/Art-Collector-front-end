
const URL = "http://localhost:3000/api/v1"

export let fetchArtworkSearch = (searchItem) => {
  return dispatch => {
    dispatch({type: 'LOADING_ARTWORKS'});
    return fetch(`${URL}/artworks/?q=${searchItem}`)
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(json => dispatch({type: 'FETCH_ARTWORK_SEARCH', payload: json}));
  }
}

export let fetchAllArtworks = () => {
  return dispatch => {
    dispatch({type: 'LOADING_ARTWORKS'})
    return fetch(`${URL}/artists`)
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(json => dispatch({type: 'FETCH_ALL_ARTWORKS', payload: json}))
  }
}
