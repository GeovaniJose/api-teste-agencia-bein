const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password_hash: {
    type: String,
    required: true,
    select: false
  }
}, {
  timestamps: true
})

module.exports = model('User', UserSchema)
