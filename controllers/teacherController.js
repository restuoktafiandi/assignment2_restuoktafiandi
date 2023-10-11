const teachers = require('../data/teachers.json')

const getAllTeachers = (req, res) => {
  res.status(200).json(teachers)
}

module.exports = { getAllTeachers }