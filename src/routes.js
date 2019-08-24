const express = require('express')
const UserController = require('./controllers/UserController')
const AuthController = require('./controllers/AuthController')
const TodoController = require('./controllers/TodoController')
const authMiddleware = require('./middlewares/auth')

const routes = express.Router()

routes.post('/register', UserController.store)
routes.post('/authenticate', AuthController.store)
routes.get('/todos', authMiddleware, TodoController.index)
routes.post('/todos', authMiddleware, TodoController.store)
routes.get('/todos/:todoId', authMiddleware, TodoController.show)
routes.put('/todos/:todoId', authMiddleware, TodoController.update)
routes.delete('/todos/:todoId', authMiddleware, TodoController.destroy)

module.exports = routes
