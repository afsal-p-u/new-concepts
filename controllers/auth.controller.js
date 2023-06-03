const User = require('../models/user.model')

const loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return res.status(400).json('User not found')
    }

    if (req.body.password !== user.password) {
        return res.status(400).json('Wrong password')
    }

    return res.status(200).json(user)
}

module.exports = { loginUser }