import Vue from 'vue'

import { apolloClient } from '../apollo'
import { authData } from '../auth'

import { collection } from './types'

export const status = Vue.observable({
  errors: [],
  pending: 0,

  get hasErrors () {
    return this.errors.length > 0
  },
  get loading () {
    return this.pending > 0
  }
})

/**
 * Higher order function to decorate Apollo queries with loading status and error
 * handling. The built-in Apollo loading status only works with component queries.
 */
const withStatus = fn => async function () {
  status.pending++
  const { errors, data } = await fn(...arguments)
  status.pending--

  if (errors) {
    status.errors = errors
  }

  return data
}

/**
 * For advanced usecases, `query` and `mutate` are available which are expected
 * to be used with a full GraphQL query and variables. Otherwise, convenience
 * methods are available for common plugin needs.
 */
export default {
  status,

  query: withStatus(apolloClient.query),
  mutate: withStatus(apolloClient.mutate),

  /**
   * Get a single collection, using a custom query.
   * @param {Object} query A query for the GraphQL client.
   */
  async getCollection (query) {
    const data = await this.query(query)
    return collection(data.collection)
  },

  /**
   * Get all collections that are associated with a ministry.
   * A `$ministry` variables is provided for your query.
   * @param {Object} query A query for the GraphQL client.
   */
  async getCollections ({ query, variables = {} }) {
    variables.ministry = authData.ministry.id

    const data = await this.query({ query, variables })
    return (data?.ministry?.collections?.edges || []).map(({ node }) => collection(node))
  }
}
