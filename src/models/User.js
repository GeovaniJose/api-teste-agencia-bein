const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password_hash')) next()

  this.password_hash = await bcrypt.hash(this.password_hash, 10)
})

UserSchema.methods = {
  compareHash (hash) {
    return bcrypt.compare(hash, this.password_hash)
  },

  generateToken () {
    return jwt.sign({ id: this._id }, process.env.SECRET_API, {
      expiresIn: 86400
    })
  }
}

module.exports = model('User', UserSchema)
