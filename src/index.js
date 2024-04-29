const express = require('express')
const rutas = require('./routes/index')
const app = express()

app.use(rutas)

app.listen(2000, () => {
    console.log('servidor arriba')
})