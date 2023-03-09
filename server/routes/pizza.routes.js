const ControladorPizza = require('../controllers/pizza.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {

    app.get('/api/obtenerpizza',ControladorPizza.obtenerPizza)
    app.get('/api/obtenerunapizza/:id',ControladorPizza.obtenerUnaPizza)
    app.post('/api/crearpizza',ControladorPizza.crearPizza)
    app.put('/api/editarpizza/:id',ControladorPizza.editarPizza)
    app.delete('/api/borrarpizza/:id',ControladorPizza.eliminarPizza)
}
