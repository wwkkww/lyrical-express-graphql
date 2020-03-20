# Lyrical-GraphQL

Starter project on GraphQL. Using Apollo-Boost with graphql HOC practice

## React-apollo example
```javascript
const helloWorldQuery = graphql`
  query hello {
    helloWorld
  }
`;
```

### option 1: using `Query` component that provides a render props
```javascript
const MyComponent = () => (
  <Query query={helloWorldQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading data from Apollo Client...</p>;
      return <p>{data && data.helloWorld} from Apollo Client</p>;
    }}
  </Query>
);
```

### option 2: using graphql HOC
```javascript
export default graphql(gql(helloWorldQuery))(MyComponent);
```