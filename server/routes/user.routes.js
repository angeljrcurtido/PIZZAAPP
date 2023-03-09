const ControladorUsuarios = require('../controllers/user.controllers')

module.exports = (app) => {

    app.post('/api/registrar', ControladorUsuarios.registraUsuario)
    app.post('/api/login', ControladorUsuarios.loginUsuario)
    app.get('/api/logout', ControladorUsuarios.logOutUser)
   // app.get('/api/obtenerunaautores/:id', ControladorAutores.obtenerUnaAutores)

}