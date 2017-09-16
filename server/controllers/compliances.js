const Compliance = require('../models/compliance')

exports.getCompliances = function(req, res, next) {
  const userId = req.params.userId

  Compliance.find({ user: userId}).exec(function(err, compliances) {
    if (err) { return next(err) }
    res.json(compliances)
  })
}