import React from 'react'
import { Link } from 'react-router'

export const Feed = (props) => (
  <div style={{margin: '0 auto'}}>
    Feed
    <button className="btn btn-default" onClick={props.dataRecieved}>Add Data</button>
    <table className="table table-condensed">
      <thead>
      <tr>
        <th>Title</th>
        <th>Published</th>
      </tr>
      </thead>
      <tbody>
      {props.feed.map(f => <tr key={f.uuid}>
        <td><Link to={'/article/' + f.uuid} activeClassName='route--active'>
          {f.title}
        </Link></td>
        <td>{f.published.toString()}</td>
      </tr>)}
      </tbody>
    </table>
  </div>
)

Feed.propTypes = {
  dataRecieved: React.PropTypes.func.isRequired,
  feed: React.PropTypes.array.isRequired
}

export default Feed
