const { Router } = require('express')
const rutas = Router()


rutas.get('/', (req, res) => {
    res.send('hola mundo')
})


module.exports = rutas