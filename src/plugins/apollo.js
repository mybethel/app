import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client'

Vue.use(VueApollo)

const AUTH_TOKEN = 'io.bethel.token'

export const { apolloClient } = createApolloClient({
  httpEndpoint: 'https://platform.bethel.vercel.app/graphql',
  tokenName: AUTH_TOKEN,
  persisting: false
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  errorHandler (error) {
    console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
  }
})

export default apolloProvider
