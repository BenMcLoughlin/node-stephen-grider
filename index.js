const express = require('express')

const app = express()

app.get('/', (req, res) => {
     res.send({hi: "there"})
})

app.get('/greeting', (req, res) => {
     res.send({hi: "greeeting"})
})

const PORT = process.env.port || 5000

app.listen(process.env.PORT, "0.0.0.0");