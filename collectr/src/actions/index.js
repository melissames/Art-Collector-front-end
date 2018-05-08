
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

// colors

export let fetchColorImage = id => {
  return dispatch => {
    return fetch(`${URL}/colors/?q=${id}`)
      .then(res => res.json())
      .then(json => console.log(json))
  }
}


// collections

export let fetchCollections = () => {
  // debugger
  return dispatch => {
    return fetch(`${URL}/collections`)
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(json => dispatch({type: 'FETCH_ALL_COLLECTIONS', payload: json}))
  }
}

// export let createCollections = (collectionName) => {
//   return dispatch => {
//     return fetch(`${URL}/collections/?q=${collectionName}`)
//     .then(res => res.json())
//     .then(json => dispatch({type: 'FETCH_ALL_COLLECTIONS', payload: json}))
//   }
// }

// export let addPhotoToCollection = (photoId, collectionId) = {
//   return dispatch => {
//     return fetch(`${URL}/artwork_collections`{
//       method: 'POST',
//       body: JSON.stringify({
//         artwork_id: photoId,
//         collection_id: collectionId
//       })
//       .then(res => res.json())
//       .then(console.log('great success!!'))
//     })
//   }
// }

// export let fetchCollections = () => {
//   return dispatch => {
//     return fetch(`${URL}/collections`)
//       .then(res => res.json())
//       .then(json => console.log(json))
//   }
// }
