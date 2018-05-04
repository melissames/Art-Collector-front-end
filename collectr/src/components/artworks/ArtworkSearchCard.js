import React from 'react';
import { Card } from 'semantic-ui-react'

const ArtworkSearchCard = props => {

  const handleClick = () => {
    console.log('omg >.<')
  }

  return (
    <div>
      {props.artwork.img ? <Card
          key={props.artwork.id}
          image={props.artwork.img}
          header={props.artwork.name} /> : null}
      <button id={props.artwork.id} onClick={handleClick}>Add to Collection</button>
    </div>
  )
}

export default ArtworkSearchCard;
