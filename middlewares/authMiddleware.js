const jwt = require('jsonwebtoken')

const SECRET_KEY = 'secret'

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')
  if(!token) return res.status(401).json({ message: 'Akses ditolak' })

  jwt.verify(token, SECRET_KEY, (err, decode) => {
    if(err) return res.status(403).json({ message: 'Token tidak valid' })

    req.user = decode
    next()
  })
}

module.exports = { authenticateToken }