import gql from 'graphql-tag';

const fetchSongById = gql`
  query SongQuery($id: ID!){
    song(id: $id) {
      id 
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`

export default fetchSongById