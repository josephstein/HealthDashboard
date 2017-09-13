import React from 'react'
import Moment from 'react-moment'

export default class UserDetailsBasics extends React.Component {
  handleEditClick() {
    // TODO
  }

  renderTextRow(label, value, isAlignedRight = false) {
    const displayedValue = (value !== '' ? value : "not set")
    const valueClassName = (isAlignedRight == true ? "text-right" : "")

    return (
      <tr>
        <td><b>{label}</b></td>
        <td className={valueClassName}>{displayedValue}</td>
      </tr>
    )
  }

  renderDateRow(label, value) {
    const date = new Date(value)

    return (
      <tr>
        <td><b>{label}</b></td>
        <td><Moment format="MM/DD/YYYY">{date}</Moment></td>
      </tr>
    )
  }

  renderEmailRow(value, isActive) {
    const url = "mailto:" + value
    const iconClass = "glyphicon glyphicon-envelope text-" + (isActive === true ? "success" : "danger")
    const displayedValue = (value !== '' ? value : "not set")

    if (value === '') {
      return (
        <tr>
          <td><b>Email</b></td>
          <td><i>not set</i></td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td><b>Email</b></td>
          <td><a href={url}>{displayedValue}</a></td>
          <td className="text-right"><span className={iconClass} title="Email Notifications"></span></td>
        </tr>
      )
    }
  }

  renderPhoneRow(value, isCallActive, isTextActive) {
    const textClass = "glyphicon glyphicon-phone text-" + (isTextActive === true ? "success" : "danger")
    const callClass = "glyphicon glyphicon-earphone text-" + (isCallActive === true ? "success" : "danger")

    return (
      <tr>
        <td><b>Phone</b></td>
        <td>{value}</td>
        <td className="text-right"><span className={textClass} title="Text Notifications"></span></td>
        <td className="text-right"><span className={callClass} title="Call Notifications"></span></td>
      </tr>
    )
  }

  renderPosNegNumberRow(label, value, isAlignedRight = false) {
    const valueClassName = (isAlignedRight == true ? "text-right" : "")

    let className = ""
    if (value > 0) {
      className = "glyphicon glyphicon-arrow-up text-success"
    } else if (value < 0) {
      className = "glyphicon glyphicon-arrow-down text-danger"
    }
    

    return (
      <tr>
        <td><b>{label}</b></td>
        <td className={valueClassName}><span className={className}></span> {Math.abs(value)}</td>
      </tr>
    )
  }

  renderPercentageRow(label, value, isAlignedRight = false) {
    const valueClassName = (isAlignedRight == true ? "text-right" : "")
    let displayValue = (value * 100) + "%"

    return (
      <tr>
        <td><b>{label}</b></td>
        <td className={valueClassName}><span></span> {displayValue}</td>
      </tr>
    )
  }

  renderBooleanRow(label, value, isAlignedRight = false) {
    const displayedValue = (value === true ? "Yes" : "No")
    const valueClassName = (isAlignedRight == true ? "text-right" : "")

    return (
      <tr>
        <td><b>{label}</b></td>
        <td className={valueClassName}>{displayedValue}</td>
      </tr>
    )
  }

  renderNotificationRow(classSymbol, isTrue) {
    const displayedValue = (isTrue ? "Enabled" : "Disabled")

    return (
      <tr>
        <td><span className={classSymbol} aria-hidden="true"></span></td>
        <td>{displayedValue}</td>
      </tr>
    )
  }

  render() {
    const { user } = this.props
    if (!user) { return }

    return (
      <div>
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Basic</h3>
          </div>
          <table className="table">
            <tbody>
              {this.renderEmailRow(user.email, user.isEmail)}
              {this.renderPhoneRow(user.phonenumber, user.isCall, user.isText,)}
              {this.renderTextRow("Birthday", user.dateofbirth)}
              {this.renderDateRow("Signup Date", user.created)}
              {this.renderBooleanRow("Alarm Enabled", user.isAlarmsEnabled)}
              {this.renderBooleanRow("Active", user.active)}
            </tbody>
          </table>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Stats</h3>
          </div>
          <table className="table">
            <tbody>
              {this.renderPosNegNumberRow("Week-to-Week", user.weektoweek, true)}
              {this.renderTextRow("Most Missed", user.mostMissed, true)}
              {this.renderTextRow("Streak", user.streak, true)}
              {this.renderPercentageRow("3-Day Percentage", user.threedayperc, true)}
              {this.renderTextRow("Compliance (10 Days)", user.compliance, true)}
              {this.renderTextRow("Risk Score", user.riskscore, true)}
              {this.renderTextRow("Acuity", user.acuity, true)}
            </tbody>
          </table>
        </div>

        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">Medical</h3>
          </div>
          <table className="table">
            <tbody>
              {this.renderTextRow("Insurance", user.insurance, true)}
              {this.renderTextRow("Doctor", user.doctor, true)}
              {this.renderTextRow("Pharmacy", user.pharmacyType, true)}
              {this.renderTextRow("Program", user.program, true)}
              {this.renderTextRow("Provider", user.provider, true)}
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
