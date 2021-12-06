import Vue from 'vue'

import router from '../routes'

import Developer from './developer'
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

  (plugin.routes || []).forEach(route => router.addRoute(route))
}

[
  Podcast,
  Developer
].forEach(install)
