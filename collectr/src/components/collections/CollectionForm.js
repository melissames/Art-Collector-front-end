import React from 'react';
import { createCollection } from '../../actions/index.js';
import { bindActionCreators } from 'redux'
// import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

const CollectionForm = props => {

  const handleSubmit = event => {
    event.preventDefault();

    props.createCollection(event.target.name.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Create New Collection</label><br></br>
        <input type='text' placeholder='enter name' name='name' />
        <input type='submit' />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createCollection: bindActionCreators(createCollection, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CollectionForm);
