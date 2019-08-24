const bcrypt = require('bcryptjs')

const User = require('../models/User')

module.exports = {
  async store (req, res) {
    const { email, password_hash } = req.body

    try {
      const user = await User.findOne({ email }).select('+password_hash')

      if (!user) {
        return res.status(400).json({ error: 'User not found' })
      }

      if (!await bcrypt.compare(password_hash, user.password_hash)) {
        return res.status(400).json({ error: 'Invalid password' })
      }

      user.password_hash = undefined

      return res.json(user)
    } catch (err) {
      return res.status(400).json({ error: 'Authentication failed' })
    }
  }
}
