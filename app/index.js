import express from 'express'

const { HOSTNAME, PORT } = process.env
const app = express()

app.get(`/`, (_, response) => response.send(HOSTNAME))
app.listen(PORT)
