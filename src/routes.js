const express = require('express')
const UserController = require('./controllers/UserController')
const AuthController = require('./controllers/AuthController')
const TodoController = require('./controllers/TodoController')

const routes = express.Router()

routes.post('/register', UserController.store)
routes.post('/authenticate', AuthController.store)
routes.get('/todos', TodoController.index)
routes.get('/todos/:todoId', TodoController.show)
routes.post('/todos', TodoController.store)
routes.put('/todos/:todoId', TodoController.update)
routes.delete('/todos/:todoId', TodoController.destroy)

module.exports = routes
