import React, { Component } from 'react'
import loadable from 'loadable-components'
import createLoadableVisibilityComponent from './createLoadableVisibilityComponent'
import { IntersectionObserver } from './capacities'

function loadableVisiblity (load, opts = {}) {
  if (IntersectionObserver) {
    return createLoadableVisibilityComponent([load, opts], {
      Loadable: loadable,
      preloadFunc: 'load',
      loadingComponent: () => opts.LoadingComponent,
    })
  } else {
    return loadable(load, opts)
  }
}

module.exports = loadableVisiblity
