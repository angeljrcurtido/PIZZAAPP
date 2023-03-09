//CONFIGURACION
const cors = require ('cors')
const express = require('express')
const app = express()
const PORT = 8000
require('dotenv').config()
const cookieParser = require('cookie-parser')

//MIdleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//midleware de cookies
app.use(cookieParser())

//Cors

app.use (cors({
    credentials:true,
    origin:'http://localhost:3000'

}))

//Base de datos
require('./config/mongoose.config')



//Importar las rutas de nuestro servidor backend 
const RutasPizza = require('./routes/pizza.routes')
RutasPizza(app)
const rutasUsuarios = require('./routes/user.routes')
rutasUsuarios(app)


//Aqui es donde mencionmos donde se va estar ejecutando el servidor en que puerto
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})