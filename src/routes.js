const express = require('express')
const UserController = require('./controllers/UserController')
const AuthController = require('./controllers/AuthController')

const routes = express.Router()

routes.post('/register', UserController.store)
routes.post('/authenticate', AuthController.store)

module.exports = routes
