const Users = require('./controllers/users')
const Prescriptions = require('./controllers/prescriptions')
const Compliances = require('./controllers/compliances')

module.exports = function(app) {
  app.get('/', function(req, res) { res.sendStatus(200) })
  app.get('/users', Users.getUsers)
  app.put('/user/:userId', Users.updateUser)
  app.get('/prescriptions/:userId', Prescriptions.getPrescriptions)
  app.get('/compliances/:userId', Compliances.getCompliances)
}