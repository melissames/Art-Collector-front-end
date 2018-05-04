
const URL = "http://localhost:3000/api/v1"

// artworks

export let fetchArtworkSearch = (searchItem) => {
  return dispatch => {
    return fetch(`${URL}/artworks/?q=${searchItem}`)
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_ARTWORK_SEARCH', payload: json}));
  }
}

export let fetchAllArtworks = () => {
  return dispatch => {
    return fetch(`${URL}/artists`)
      .then(res => res.json())
      .then(json => dispatch({type: 'FETCH_ALL_ARTWORKS', payload: json}))
  }
}



// collections

export let createCollection = (collectionName) => {
  return dispatch => {
    return fetch(`${URL}/collections/?q=${collectionName}`)
    .then(res => res.json())
    .then(json => console.log({type: 'FETCH_COLLECTION_SEARCH', payload: json}))
  }
}
