import gql from 'graphql-tag';

const fetchSongsQuery = gql`
  {
    songs {
      id
      title
    }
  }
`
export default fetchSongsQuery