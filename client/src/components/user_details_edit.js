import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { updateUser } from '../actions'

class UserDetailsEdit extends React.Component {
  renderField(field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  
  render() {
    const { onCancelClick, pristine, submitting, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field 
          label="First Name"
          name="firstName"
          component={this.renderField}
        />
        <Field
          label="Last Name"
          name="lastName"
          component={this.renderField}
        />
        <Field
          label="Email"
          name="email"
          component={this.renderField}
        />
        <Field
          label="Phone Number"
          name="phonenumber"
          component={this.renderField}
        />
        <Field
          label="Provider"
          name="provider"
          component={this.renderField}
        />
        <Field
          label="Program"
          name="program"
          component={this.renderField}
        />
        <Field
          label="Doctor"
          name="doctor"
          component={this.renderField}
        />
        <Field
          label="Insurance"
          name="insurance"
          component={this.renderField}
        />
        <Field
          label="Pharmacy Type"
          name="pharmacyType"
          component={this.renderField}
        />

        <div className="btn-toolbar" aria-label="...">
          <button className="btn btn-default" onClick={onCancelClick} disabled={submitting}>Cancel</button>
          <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
        </div>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = "Enter a first name"
  }

  if (!values.lastName) {
    errors.lastName = "Enter a last name"
  }

  if (!values.email) {
    errors.email = "Enter an email"
  }

  if (!values.phone) {
    errors.phone = "Enter a phone number"
  }

  if (!values.provider) {
    errors.provider = "Enter a provider"
  }

  if (!values.program) {
    errors.program = "Enter a program"
  }

  if (!values.doctor) {
    errors.doctor = "Enter a doctor"
  }

  if (!values.insurance) {
    errors.insurance = "Enter an insurance"
  }

  if (!values.pharmacy) {
    errors.pharmacy = "Enter a pharmacy"
  }

  return errors
}

UserDetailsEdit = reduxForm({
  form: 'UserDetailsEdit',
  onSubmit: updateUser,
  validate
})(UserDetailsEdit)

UserDetailsEdit = connect(
  state => ({
    initialValues: state.selectedUser.data
  })
)(UserDetailsEdit)

export default UserDetailsEdit