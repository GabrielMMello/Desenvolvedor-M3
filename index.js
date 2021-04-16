const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 3000
const path = require('path')

const app = express()

const dir = path.join(__dirname, '/public')
app.use(express.static(dir))

app.get('/', (_req, res) => {
    res.render(path.join(dir, 'index.html'))
  })

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))