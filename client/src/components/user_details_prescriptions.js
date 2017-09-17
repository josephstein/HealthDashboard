import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { 
  renderDateRow,
  renderTextRow,
  renderBooleanRow
 } from './utils'

class UserDetailsPrescriptions extends React.Component {
  renderSchedule(values) {
    const symbol = "●"

    return (
      <table className="table table-responsive">
        <tbody>
          <tr>
            <th></th>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
          <tr>
            <td><b>Morning</b></td>
            <td>{_.includes(values, 0) ? symbol : ""}</td>
            <td>{_.includes(values, 3) ? symbol : ""}</td>
            <td>{_.includes(values, 6) ? symbol : ""}</td>
            <td>{_.includes(values, 9) ? symbol : ""}</td>
            <td>{_.includes(values, 12) ? symbol : ""}</td>
            <td>{_.includes(values, 15) ? symbol : ""}</td>
            <td>{_.includes(values, 18) ? symbol : ""}</td>
          </tr>
          <tr>
            <td><b>Afternoon</b></td>
            <td>{_.includes(values, 1) ? symbol : ""}</td>
            <td>{_.includes(values, 4) ? symbol : ""}</td>
            <td>{_.includes(values, 7) ? symbol : ""}</td>
            <td>{_.includes(values, 10) ? symbol : ""}</td>
            <td>{_.includes(values, 13) ? symbol : ""}</td>
            <td>{_.includes(values, 16) ? symbol : ""}</td>
            <td>{_.includes(values, 19) ? symbol : ""}</td>
          </tr>
          <tr>
            <td><b>Evening</b></td>
            <td>{_.includes(values, 2) ? symbol : ""}</td>
            <td>{_.includes(values, 5) ? symbol : ""}</td>
            <td>{_.includes(values, 8) ? symbol : ""}</td>
            <td>{_.includes(values, 11) ? symbol : ""}</td>
            <td>{_.includes(values, 14) ? symbol : ""}</td>
            <td>{_.includes(values, 17) ? symbol : ""}</td>
            <td>{_.includes(values, 20) ? symbol : ""}</td>
          </tr>
        </tbody>
      </table>
    )
  }
  

  renderPrescriptions(prescriptions) {
    const sortedPrescriptions = _.sortBy(prescriptions, 'name')
    return _.map(sortedPrescriptions, prescription => {
      return (
        <div className="panel panel-default" key={prescription._id}>
          <div className="panel-heading">
            <h3 className="panel-title">{prescription.name}</h3>
          </div>
          <div className="panel-body">
            <table className="table">
              <tbody>
                {renderDateRow("Start Date", prescription.startDate)}
                {renderDateRow("End Date", prescription.endDate)}
                {renderTextRow("Dosage", prescription.dosage)}
                {renderTextRow("Number of Pills", prescription.numberofpills)}
                {renderTextRow("Total Pills", prescription.totalpills)}
                {renderBooleanRow("Needs Renewal", prescription.needsRenewal)}
                {renderBooleanRow("In Tray", prescription.inTray)}
                {renderTextRow("Notes", prescription.notes)}
              </tbody>
            </table>
          </div>
          <div className="panel-footer">
            <p><b>Schedule: </b>{prescription.scheduleText}</p>
            {this.renderSchedule(prescription.schedule)}
          </div>
        </div>
      )
    })
  }

  render() {
    const { prescriptions } = this.props
    if (!prescriptions) {  return <div>No prescriptions available</div> }

    return (
      <div>
        <h4>{prescriptions.length} Prescriptions</h4>
        {this.renderPrescriptions(prescriptions)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { prescriptions: state.selectedUser.prescriptions }
}

export default connect(mapStateToProps)(UserDetailsPrescriptions)