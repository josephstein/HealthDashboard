const User = require('../models/user')

exports.getUsers = function(req, res, next) {
  User.find(function(err, users) {
    if (err) { return next(err) }
    res.json(users)
  })
}