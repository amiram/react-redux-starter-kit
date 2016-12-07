export default (store) => ({
  path : 'articles',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Articles = require('./containers/ArticlesContainer').default
      //const reducer = require('./modules/article').default

      /*  Add the reducer to the store on key 'feed'  */
     // injectReducer(store, { key: 'article', reducer })

      /*  Return getComponent   */
      cb(null, Articles)

    /* Webpack named bundle   */
    }, 'articles')
  }
})
