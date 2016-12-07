import React from "react";
import {browserHistory} from "react-router";

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.article ?
      <div style={{margin: '0 auto'}}>
        <article>
          <h1>{this.props.article.title}</h1>
          <h5>{this.props.article.published.toString()}</h5>
          <div>{this.props.article.text}</div>
        </article>
      </div>
      : <br/>
  }

  componentWillMount() {
    if (!this.props.article) {
      browserHistory.push('/feed');
    }
  }
}

Article.propTypes = {
  article: React.PropTypes.object
}

export default Article
