import React from 'react'
import UserDetails from './user_details'
import UserEdit from './user_details_edit'
import { connect } from 'react-redux'
import { updateUser } from '../actions'

class SideBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editMode: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const userData = this.props.user
    if (!userData) { return }

    const nextUserData = nextProps.user
    if (!nextUserData) { return }

    const currentId = userData._id
    const nextId = nextUserData._id
    
    // If user is in edit mode and they selected another user from
    // list, let's revert back to display mode
    if (currentId !== nextId) {
      this.setState({
        editMode: false
      })
    }
  }

  handleEditClick() {
    this.setState({
      editMode: true
    })
  }

  handleEditCancel() {
    this.setState({
      editMode: false
    })
  }

  handleEditSubmit(id, values) {
    updateUser(id, values)
  }

  renderActiveView() {
    if (this.state.editMode === true) {
      return <UserEdit onCancelClick={this.handleEditCancel.bind(this)} onSubmitClick={this.handleEditSubmit.bind(this)} />
    } else {
      return <UserDetails />
    }
  }

  renderLeftButton() {
    if (!this.state.editMode) {
      return (
        <button type="button" className="btn btn-default" onClick={() => this.handleEditClick()}>
          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
        </button>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="row text-right">
          <div className="btn-group" role="group" aria-label="...">
            {this.renderLeftButton()}
            <button type="button" className="btn btn-default" onClick={() => this.props.onCloseClick()}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Close
            </button>
          </div>
        </div>

        {this.renderActiveView()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { user: state.selectedUser.data }
}

export default connect(mapStateToProps)(SideBar)