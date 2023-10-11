const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes')
const teachRoutes = require('./routes/teacherRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(authRoutes)
app.use(teachRoutes)

app.use((_, res) => {
  res.status(404).json({
    message: 'Rute tidak ditemukan'
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server run is success on http://localhost:${PORT}`);
})
