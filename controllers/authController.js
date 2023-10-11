const jwt = require('jsonwebtoken')
const users = require('../data/users.json')

const SECRET_KEY = 'secret'

const login = (req, res) => {
  const { username, password } = req.body

  const matchUsername = users.find((usr) => usr.username === username)
  if (matchUsername === undefined) return res.status(401).json({ message: 'Nama pengguna tidak ditemukan'})

  const matchUserPass = users.find((usr) => usr.password === password)
  if (matchUserPass === undefined) return res.status(401).json({ message: 'Password Salah' })

  const token = jwt.sign({ username: matchUsername.username }, SECRET_KEY, { expiresIn: '1h' })
  res.status(200).json({ token })
}

module.exports = { login }