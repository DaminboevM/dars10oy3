import express from 'express'
import 'dotenv/config'
import { connectDB } from './config/Database.js'
import router from './router/router.js'
import errorHeandler from './middleware/errHeandler.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
await connectDB()
app.use('/api',router)
app.use(errorHeandler)


app.listen(PORT, () => console.log(`Listening in ${PORT}-port`))