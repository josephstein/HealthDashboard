import React from 'react'

export default class UserDetails extends React.Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-default" onClick={() => this.props.onCloseClick()}>Close</button>

        <h1>Joe Schmoe</h1>
      </div>
    );
  }
}
