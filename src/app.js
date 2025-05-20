import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())


app.listen(ProdyctModel, () => console.log(`Listening in ${PORT}-port`))