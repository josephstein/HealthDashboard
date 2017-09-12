const Users = require('./controllers/users')

module.exports = function(app) {
  app.get('/', function(req, res) { res.sendStatus(200) })
  app.get('/users', Users.getUsers)
}