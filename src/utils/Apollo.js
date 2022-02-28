import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const uriPath = `${import.meta.env.VITE_SERVER_URL}/graphql`
const uploadLink = createUploadLink({ uri: uriPath })

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
})

export default client
