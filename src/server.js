require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')

// Iniciando o app
const app = express()
app.use(express.json())

// Iniciando o DB
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-hsbag.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })

app.listen(3333, () => console.log('Server listening...'))
