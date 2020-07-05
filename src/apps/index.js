import Vue from 'vue'

import router from '../routes'

import Podcast from './podcast'

export const registry = Vue.observable({
  plugins: []
})

/**
 * Install a new plugin.
 * @param {Function|Object} plugin
 * @return {Function} - Call to uninstall the plugin.
 */
export function install (plugin) {
  if (registry.plugins.indexOf(plugin) < 0) {
    registry.plugins.push(plugin)
  }

  if (plugin.routes) {
    router.addRoutes(plugin.routes)
  }
}

[
  Podcast
].forEach(install)
