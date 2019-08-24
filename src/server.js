require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

// Iniciando o app
const app = express()
app.use(express.json())
app.use(cors())

// Iniciando o DB
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-hsbag.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority` ||
  `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })

// Rotas
app.use('/api', routes)

app.listen(process.env.PORT || 3333)
