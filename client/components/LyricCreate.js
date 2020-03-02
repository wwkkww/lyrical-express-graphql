import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricCreate extends Component {
  constructor(props) {
    super(props)

    this.state = { content: "" };
  }

  onSubmit(event) {
    event.preventDefault();

    console.log("submit")
    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.content
      }
    })

    this.setState({ content: "" })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Lyric</label>
          <input
            value={this.state.content}
            onChange={event => this.setState({ content: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddLyric($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      title
      lyrics {
        id
        likes
        content
      }
    }
  }
`

export default graphql(mutation)(LyricCreate);