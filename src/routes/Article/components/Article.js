import React from 'react'
import { Link } from 'react-router'

export const Article = (props) => (
  <div style={{margin: '0 auto'}}>
    <article>
      <h1>{props.article.title}</h1>
      <h5>{props.article.published.toString()}</h5>
      <div>{props.article.text}</div>
    </article>
  </div>
)

Article.propTypes = {
  article: React.PropTypes.object.isRequired
}

export default Article
