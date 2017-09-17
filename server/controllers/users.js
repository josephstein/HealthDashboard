const User = require('../models/user')

exports.getUsers = function(req, res, next) {
  User.find(function(err, users) {
    if (err) { return next(err) }
    res.json(users)
  })
}

exports.updateUser = function(req, res, next) {
  const b = req.body
  const userId = b.user_id
  const firstName = b.first_name
  const lastName = b.last_name
  const email = b.email
  const phone = b.phone
  const provider = b.provider
  const program = b.program
  const doctor = b.doctor
  const insurance = b.insurance
  const pharmacy = b.pharmacy

  User.findOne({ _id: userId}).exec(function(err, user) {
    if (err) { return next(err) }

    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.phone = phone
    user.provider = provider
    user.program = program
    user.doctor = doctor
    user.insurance = insurance
    user.pharmacy = pharmacy

    user.save(function(err) {
      if (err) { return next(err) }

      res.json({ user })
    })
  })
}