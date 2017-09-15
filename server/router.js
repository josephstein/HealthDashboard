const Users = require('./controllers/users')
const Prescriptions = require('./controllers/prescriptions')

module.exports = function(app) {
  app.get('/', function(req, res) { res.sendStatus(200) })
  app.get('/users', Users.getUsers)
  app.get('/prescriptions/:userId', Prescriptions.getPrescriptions)
}