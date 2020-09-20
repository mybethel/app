import { apolloClient } from '../apollo'
import { authData } from '../auth'

import { collection } from './types'

/**
 * For advanced usecases, `query` and `mutate` are available which are expected
 * to be used with a full GraphQL query and variables. Otherwise, convenience
 * methods are available for common plugin needs.
 */
export default {
  query: apolloClient.query,
  mutate: apolloClient.mutate,

  /**
   * Get a single collection, using a custom query.
   * @param {Object} query A query for the GraphQL client.
   */
  async getCollection (query) {
    const { errors, data } = await this.query(query)

    if (errors) {
      // @TODO: Error handling
    }

    return collection(data.collection)
  },

  /**
   * Get all collections that are associated with a ministry.
   * A `$ministry` variables is provided for your query.
   * @param {Object} query A query for the GraphQL client.
   */
  async getCollections ({ query, variables = {} }) {
    variables.ministry = authData.ministry.id

    const { errors, data } = await this.query({ query, variables })

    if (errors) {
      // @TODO: Error handling
    }

    return (data?.ministry?.collections?.edges || []).map(({ node }) => collection(node))
  }
}
