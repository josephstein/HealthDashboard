import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { renderDateRow } from './utils'

class UserDetailsCompliances extends React.Component {
  renderCompliances(compliances) {
    const sortedCompliances = _.sortBy(compliances, ['timeTaken', 'wellId'])
    return _.map(sortedCompliances, compliance => {
      return (
        <div className="panel panel-default" key={compliance._id}>
          <div className="panel-heading">
            <h3 className="panel-title">Well ID: {compliance.wellId}</h3>
          </div>
          <table className="table">
            <tbody>
              {renderDateRow("Time Taken", compliance.timeTaken)}
              {renderDateRow("Well Time", compliance.wellTime)}
            </tbody>
          </table>
        </div>
      )
    })
  }

  render() {
    const { compliances } = this.props
    if (!compliances) {  return <div>No compliances available</div> }

    return (
      <div>
        <h4>{compliances.length} Compliances</h4>
        {this.renderCompliances(compliances)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { compliances: state.selectedUser.compliances }
}

export default connect(mapStateToProps)(UserDetailsCompliances)