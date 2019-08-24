const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  comment: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})

module.exports = model('Todo', TodoSchema)
