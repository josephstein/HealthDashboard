import './App.css'
import React, { Component } from 'react'
import Header from './components/header'
import UserList from './components/user_list'
import UserDetails from './components/user_details'
import { connect } from 'react-redux'
import { fetchUsers } from './actions'

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
      selectedUserId: "5705133ddc30a5c3693836d5", //null
    }
  }

  componentWillMount() {
    this.props.fetchUsers()
  }

  handleRowClick(userId) {
    this.setState({
      selectedUserId: userId
    })
  }

  handleUserDetailsCloseClick() {
    this.setState({
      selectedUserId: null
    })
  }

  renderSideBar(shouldRender) {
    if (!shouldRender) { return }

    const selectedUser = this.props.users.find((user) => { return user._id === this.state.selectedUserId })
    if (!selectedUser) { return }

    return (
      <div className="col-md-4">
        <UserDetails user={selectedUser} onCloseClick={this.handleUserDetailsCloseClick.bind(this)} />
      </div>
    )
  }

  render() {
    const showSideBar = this.state.selectedUserId != null
    const userListClassName = "col-md-" + (showSideBar ? "8" : "12")

    return (
      <div className="container-fluid">
        <div>
          <Header />
          <div className={userListClassName}>
            <UserList data={this.props.users} onRowClick={this.handleRowClick.bind(this)} />
          </div>
          {this.renderSideBar(showSideBar)}
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(App)