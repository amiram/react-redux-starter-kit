import React from 'react'

export const Feed = (props) => (
  <div style={{margin: '0 auto'}}>
    Feed
    <button className="btn btn-default" onClick={props.dataRecieved}>Add Data</button>
    <ul>
      {props.feed.map(f => <li key={f.a}>{f.a}</li>)}
      </ul>
  </div>
)

Feed.propTypes = {
  dataRecieved : React.PropTypes.func.isRequired,
  feed: React.PropTypes.array.isRequired
}

export default Feed
