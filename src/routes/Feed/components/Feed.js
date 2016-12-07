import React from 'react'

export const Feed = (props) => (
  <div style={{margin: '0 auto'}}>
    Feed
    <button className="btn btn-default" onClick={this.dataRecieved.bind(this)}>Add Data</button>
  </div>
)

Feed.propTypes = {
  dataRecieved : React.PropTypes.func.isRequired,
}

export default Feed
