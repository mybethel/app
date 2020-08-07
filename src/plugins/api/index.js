import { apolloClient } from '../apollo'
import { authData } from '../auth'

import getCollections from './queries/getCollections.gql'

/**
 * For advanced usecases, `query` and `mutate` are available which are expected
 * to be used with a full GraphQL query and variables. Otherwise, convenience
 * methods are available for common plugin needs.
 */
export default {
  query: apolloClient.query,
  mutate: apolloClient.mutate,

  /**
   * Get all collections that are associated with a ministry.
   * @param {String} type The collection type, or empty for all collections.
   */
  async getCollections (type) {
    const { errors, data } =
      await this.query({
        query: getCollections,
        variables: { ministry: authData.ministry.id, type }
      })

    const collections = (data?.ministry?.collections?.edges || []).map(({ node }) => node)

    return { errors, collections }
  }
}
