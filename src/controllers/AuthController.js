const User = require('../models/User')

module.exports = {
  async store (req, res) {
    const { email, password_hash } = req.body

    try {
      const user = await User.findOne({ email }).select('+password_hash')

      if (!user) {
        return res.status(400).json({ error: 'User not found' })
      }

      if (!await user.compareHash(password_hash)) {
        return res.status(400).json({ error: 'Invalid password' })
      }

      user.password_hash = undefined

      return res.json({
        user,
        token: user.generateToken()
      })
    } catch (err) {
      return res.status(400).json({ error: 'Authentication failed' })
    }
  }
}
