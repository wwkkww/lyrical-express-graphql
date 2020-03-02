import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import fetchSongsQuery from '../queries/fetchSong';

class SongCreate extends Component {
  constructor(props) {
    super(props)
    this.state = { title: "" }
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log(this.props.mutate);

    // mutation function 
    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query: fetchSongsQuery, variables: "" }] // query on different component
    }).then(() => hashHistory.push("/"))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input onChange={evt => this.setState({ title: evt.target.value })} />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);