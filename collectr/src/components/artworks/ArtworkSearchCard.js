import React from 'react';
import { Card } from 'semantic-ui-react'

const ArtworkSearchCard = props => {

  return (
    <div>
      {props.artwork.img ? <Card
          key={props.artwork.id}
          image={props.artwork.img}
          header={props.artwork.name} /> : null}
    </div>
  )
}

export default ArtworkSearchCard;
