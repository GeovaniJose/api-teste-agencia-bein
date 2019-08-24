const Todo = require('../models/Todo')

module.exports = {
  async index (req, res) {
    try {
      const todos = await Todo.find().populate('user')

      return res.json(todos)
    } catch (err) {
      return res.status(400).json({ error: 'Error loading ToDos' })
    }
  },

  async show (req, res) {
    try {
      const todo = await Todo.findById(req.params.todoId).populate('user')

      return res.json(todo)
    } catch (err) {
      return res.status(400).json({ error: 'Error loading ToDo' })
    }
  },

  async store (req, res) {
    try {
      const todo = await Todo.create({ ...req.body, user: '5d60d97fefcb89526ca7ec09' })

      return res.json(todo)
    } catch (err) {
      return res.status(400).json({ error: 'Error creating new ToDo' })
    }
  },

  async update (req, res) {
    try {
      const todo = await Todo.findByIdAndUpdate(
        req.params.todoId,
        req.body,
        { new: true }
      ).populate('user')

      return res.json({ todo })
    } catch (err) {
      return res.status(400).json({ error: 'Error updating ToDo' })
    }
  },

  async destroy (req, res) {
    try {
      await Todo.findByIdAndRemove(req.params.todoId)

      return res.send()
    } catch (err) {
      return res.status(400).json({ error: 'Error removing ToDo' })
    }
  }
}
