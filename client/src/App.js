import './App.css'
import React, { Component } from 'react'
import Header from './components/header'
import UserList from './components/user_list'
import SideBar from './components/side_bar'
import { connect } from 'react-redux'
import { fetchUsers, setSelectedUser } from './actions'

/* TODO:
 * - Fix responsiveness (sidebar never shows!)
 * - Have sidebar just receive userID instead of user object and actions do a lookup in redux before making network request
 * - highlight active row
*/

/* BONUS:
 * - Format phone numbers
 * - Hyperlink email addresses
 * - Some items listed in readme but 
*/

/* EXPLAIN:
 * - Some items listed in readme arent in data
 *    - notifications date (email, text)
 * - Seems like User.compliancePerc is no longer used
 *    - Instead go off compliance table?
 * - futureReminderTime deprecated?
 * - Some things in json dump but not in readme (not sure what the data represents)
 *    - ex. failedOutreach, threeDayPerc, gracePeriod
 * - Acuity is supposed to be between 0-1 but data provided is from 1-5
*/

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSidebarHidden: true
    }
  }

  componentWillMount() {
    this.props.fetchUsers()
  }

  handleRowClick(selectedUserId) {
    const selectedUser = this.props.users.find((user) => { return user._id === selectedUserId })
    if (!selectedUser) { return }

    this.props.setSelectedUser(selectedUser)

    this.setState({
      isSidebarHidden: false
    })
  }

  handleUserDetailsCloseClick() {
    this.setState({
      isSidebarHidden: true
    })
  }

  renderSideBar() {
    if (this.state.isSidebarHidden) { return }

    return (
      <div className="col-md-4">
        <SideBar onCloseClick={this.handleUserDetailsCloseClick.bind(this)} />
      </div>
    )
  }

  render() {
    let userListClassName = ""
    if (this.state.isSidebarHidden) {
      userListClassName = "col-md-12"
    } else {
      userListClassName = "col-md-8 hidden-xs"
    }

    return (
      <div className="container-fluid">
        <div>
          <Header />
          <div className={userListClassName}>
            <UserList data={this.props.users} onRowClick={this.handleRowClick.bind(this)} />
          </div>
          {this.renderSideBar()}
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers, setSelectedUser })(App)