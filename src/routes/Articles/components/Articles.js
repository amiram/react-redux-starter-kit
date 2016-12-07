import React from "react";
import {Link} from "react-router";

class Articles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div style={{margin: '0 auto'}}>
      <h1>Filter Articles</h1>
      <table className="table table-condensed">
        <thead>
        <tr>
          <th>Title</th>
          <th>Published</th>
        </tr>
        </thead>
        <tbody>
        {this.props.articles.map(f => <tr key={f.uuid}>
          <td><Link to={'/article/' + f.uuid} activeClassName='route--active'>
            {f.title}
          </Link></td>
          <td>{f.published.toString()}</td>
        </tr>)}
        </tbody>
      </table>
    </div>
  }
}

Articles.propTypes = {
  articles: React.PropTypes.array
}

export default Articles
