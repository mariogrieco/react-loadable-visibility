# `react-loadable-visibility`

> A wrapper around [react-loadable](https://github.com/thejameskyle/react-loadable), only loading imports that are visible on the page.

## Example

```js
import LoadableVisibility from 'react-loadable-visibility'
import Loading from './my-loading-component'

const LoadableComponent = LoadableVisibility({
  loader: () => import('./my-component'),
  loading: Loading,
})

export default class App extends React.Component {
  render() {
    return <LoadableComponent />
  }
}
```

## Options

The API is exactly the same as `react-loadable`. [Please refer to their documentation on usage.](https://github.com/thejameskyle/react-loadable#guide)

# How does this work?

It's in essence a wrapper around `react-loadable` with hooks into an [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to inform us of when a given element is in the viewport. 

Therefore, it will only function in [browsers that have the `IntersectionObserver` API](http://caniuse.com/#feat=intersectionobserver).

[A polyfill for `IntersectionObserver` is available](https://github.com/WICG/IntersectionObserver/tree/gh-pages/polyfill) however I am skeptical of its performance but have not tested it fully to offer a recommendation here. If you have any comments about this, feel free to open a PR and adjust this README!

If you choose the use the polyfill, you can load it via a [polyfill.io](https://cdn.polyfill.io/v2/docs/) script - `<script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>`

Otherwise if the `IntersectionObserver` API is not available, we will revert back to just using `react-loadable` itself.

# Why do I want this?

`react-loadable` is a fantastic higher level component to load additional modules once they are mounted on your page. It's great for keeping your bundle size small and pulling in a larger payload when the required components are part of your tree.

However it will not account of the content that's currently visible on your page, and only load what's actually visible to the end user. If you have a long page and are loading the entire content of that page for the user, even though they may only be able to see the content [above the fold](https://www.optimizely.com/optimization-glossary/above-the-fold/), it can be wasteful and especially detrimental in a mobile context.

`react-loadable-visibility` is positioned to solve these issues by leveraging the existing awesome API of `react-loadable` with an extension to only trigger the loading of additional content once that component comes into view.

## License

`react-loadable-visibility` may be redistributed according to the [BSD 3-Clause License](LICENSE).

Copyright 2017, Stratiform Limited.