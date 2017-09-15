import React from 'react'
import Basics from './user_details_basics'
import Compliances from './user_details_compliances'
import Prescriptions from './user_details_prescriptions'
import { connect } from 'react-redux'

const TAB_BASICS = "TAB_BASICS"
const TAB_PRESCRIPTIONS = "TAB_PRESCRIPTIONS"
const TAB_COMPLIANCES = "TAB_COMPLIANCES"

class UserDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: TAB_BASICS
    }
  }

  handleBasicTabClick() {
    this.setState({
      activeTab: TAB_BASICS
    })
  }

  handlePrescriptionsTabClick() {
    this.setState({
      activeTab: TAB_PRESCRIPTIONS
    })
  }

  handleCompliancesTabClick() {
    this.setState({
      activeTab: TAB_COMPLIANCES
    })
  }

  renderActiveTab() {
    switch(this.state.activeTab) {
      case TAB_BASICS:
        return <Basics user={this.props.user} />
      case TAB_PRESCRIPTIONS:
        return <Prescriptions />
      case TAB_COMPLIANCES:
        return <Compliances />
      default:
        return <Basics />
    }
  }

  renderHeader() {
    const { user } = this.props
    const fullName = user.firstName + ' ' + user.lastName

    const className = "label label-" + (user.active ? "success" : "danger")
    const value = (user.active ? "Active" : "Inactive")

    return (
      <div>
        <h2>{fullName}</h2>
        <h5><span className={className}>{value}</span></h5>
      </div>
    )
  }

  render() {
    const { user } = this.props
    if (!user) { return }
    
    const generalClassName = (this.state.activeTab === TAB_BASICS ? "active" : "")
    const compliancesClassName = (this.state.activeTab === TAB_COMPLIANCES ? "active" : "")
    const prescriptionsClassName = (this.state.activeTab === TAB_PRESCRIPTIONS ? "active" : "")

    return (
      <div className="sidebar">
        <div className="row text-right">
          <button type="button" className="btn btn-default btn-default btn-sm" onClick={() => this.props.onCloseClick()}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Close
          </button>
        </div>

        <div className="row">
          {this.renderHeader()}
        </div>

        <div className="row">
          <ul className="nav nav-tabs user-tabs">
            <li role="presentation" className={generalClassName}><a onClick={this.handleBasicTabClick.bind(this)}>General</a></li>
            <li role="presentation" className={prescriptionsClassName}><a onClick={this.handlePrescriptionsTabClick.bind(this)}>Prescriptions</a></li>
            <li role="presentation" className={compliancesClassName}><a onClick={this.handleCompliancesTabClick.bind(this)}>Compliances</a></li>
          </ul>
        </div>

        <div className="row">
          {this.renderActiveTab()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.selected_user.data }
}

export default connect(mapStateToProps)(UserDetails)