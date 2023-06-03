const express = require('express')
const cors = require('cors')
require('dotenv').config()

const db = require('./utils/db')

const authRoutes = require('./routes/auth.route')

const app = express()
app.use(cors())
app.use(express.json())
db()

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server is running on PORT: `, PORT))