const User = require('../models/user')

const login = async (req, res) => {
    const { login, password } = req.body;
    const currentUser = await User.findOne({ login, password })
    if (currentUser) {
        console.log(`Login user: ${login} `)
        res.status(200);
        res.send({ user: login });
    } else {
        res.sendStatus(401);
    }
};

module.exports = { login };