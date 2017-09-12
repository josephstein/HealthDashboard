import './App.css'
import React, { Component } from 'react'
import Header from './components/header'
import UserList from './components/user_list'
import UserDetails from './components/user_details'
import { connect } from 'react-redux'
import { fetchUsers } from './actions'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedUserId: null
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

    return (
      <div className="col-md-4">
        <UserDetails onCloseClick={this.handleUserDetailsCloseClick.bind(this)} />
      </div>
    )
  }

  render() {
    const showSideBar = this.state.selectedUserId != null
    const userListClassName = "col-md-" + (showSideBar ? "8" : "12")

    return (
      <div>
        <div>
          <Header />
          <div className="row">
            <div className={userListClassName}>
              <UserList data={this.props.users} onRowClick={this.handleRowClick.bind(this)} />
            </div>
            {this.renderSideBar(showSideBar)}
          </div>
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