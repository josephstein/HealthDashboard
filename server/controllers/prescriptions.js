const Prescription = require('../models/prescription')

exports.getPrescriptions = function(req, res, next) {
  const userId = req.params.userId

  Prescription.find({ user: userId}).exec(function(err, prescriptions) {
    if (err) { return next(err) }
    res.json(prescriptions)
  })
}