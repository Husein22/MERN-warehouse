const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Autirizovani token je potreban'})
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token)

    req.user = await User.findOne({ _id }).select('_id')
    next()

  } catch (error) {
    console.log(token)
    res.status(401).json({error: 'Zahtjev nije autorizovan'})
  }
}

module.exports = requireAuth