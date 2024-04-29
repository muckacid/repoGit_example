const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('hola mundo')
})


app.listen(2000, () => {
    console.log('servidor arriba')
})