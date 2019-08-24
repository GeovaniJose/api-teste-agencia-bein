const User = require('../models/User')

module.exports = {
  async store (req, res) {
    const { email } = req.body

    try {
      const userExists = await User.findOne({ email })

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' })
      }

      const user = await User.create(req.body)

      user.password_hash = undefined

      return res.json({
        user,
        token: user.generateToken()
      })
    } catch (err) {
      return res.status(400).json({ error: 'Registration failed' })
    }
  }
}
