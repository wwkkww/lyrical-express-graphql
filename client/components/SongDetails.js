import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSongByID from '../queries/fetchSongByID';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetails extends Component {
  render() {
    // console.log(this.props.params)
    // console.log(this.props.data)
    const { song } = this.props.data;
    if (!song) {
      return (<div>Loading...</div>)
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

// pass query params to graphql query
export default graphql(fetchSongByID, {
  options: (props) => {
    return {
      variables: { id: props.params.id }
    }
  }
})(SongDetails);