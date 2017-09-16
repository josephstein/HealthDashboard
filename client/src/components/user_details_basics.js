import React from 'react'
import { connect } from 'react-redux'
import { 
  renderDateRow,
  renderTextRow,
  renderBooleanRow,
  renderEmailRow,
  renderPhoneRow,
  renderPosNegNumberRow,
  renderPercentageRow
 } from './utils'

class UserDetailsBasics extends React.Component {
  handleEditClick() {
    // TODO
  }

  render() {
    const { user } = this.props
    if (!user) { return <div>No information provided</div> }

    return (
      <div>
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Basic</h3>
          </div>
          <table className="table">
            <tbody>
              {renderEmailRow(user.email, user.isEmail)}
              {renderPhoneRow(user.phonenumber, user.isCall, user.isText,)}
              {renderTextRow("Birthday", user.dateofbirth, false)}
              {renderDateRow("Signup Date", user.created, false)}
              {renderBooleanRow("Alarm Enabled", user.isAlarmsEnabled, false)}
              {renderBooleanRow("Active", user.active, false)}
            </tbody>
          </table>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Stats</h3>
          </div>
          <table className="table">
            <tbody>
              {renderPosNegNumberRow("Week-to-Week", user.weektoweek, true)}
              {renderTextRow("Most Missed", user.mostMissed, true)}
              {renderTextRow("Streak", user.streak, true)}
              {renderPercentageRow("3-Day Percentage", user.threedayperc, true)}
              {renderTextRow("Compliance (10 Days)", user.compliance, true)}
              {renderTextRow("Risk Score", user.riskscore, true)}
              {renderTextRow("Acuity", user.acuity, true)}
            </tbody>
          </table>
        </div>

        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">Medical</h3>
          </div>
          <table className="table">
            <tbody>
              {renderTextRow("Insurance", user.insurance, true)}
              {renderTextRow("Doctor", user.doctor, true)}
              {renderTextRow("Pharmacy", user.pharmacyType, true)}
              {renderTextRow("Program", user.program, true)}
              {renderTextRow("Provider", user.provider, true)}
            </tbody>
          </table>
        </div>

        <div className="row text-right">
          <button type="button" className="btn btn-default btn-default btn-sm" onClick={() => this.handleEditClick()}>
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.selected_user.data }
}

export default connect(mapStateToProps)(UserDetailsBasics)