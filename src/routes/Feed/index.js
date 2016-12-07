import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'feed',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Feed = require('./containers/FeedContainer').default
      const reducer = require('./modules/feed').default

      /*  Add the reducer to the store on key 'feed'  */
      injectReducer(store, { key: 'feed', reducer })

      /*  Return getComponent   */
      cb(null, Feed)

    /* Webpack named bundle   */
    }, 'feed')
  }
})
