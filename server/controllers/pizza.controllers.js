const Pizza = require('../models/pizza.models')

const obtenerPizza = (req, res)=>{
    Pizza.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}
//sdfdsfds
const obtenerUnaPizza = (req, res)=>{
    Pizza.findById(req.params.id)
    .then((resultado)=>{
        console.log(resultado)
        res.json(resultado)

    }).catch((err)=>{
        console.log(err)
    })
}

const crearPizza = (req, res)=>{
    Pizza.create(req.body)
    .then((resultado)=>{
        console.log(resultado)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
        res.status(400).json(error)
    })
}

const editarPizza = (req, res)=>{
    Pizza.updateOne({_id:req.params.id},req.body, {runValidators:true})
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
        res.status(400).json(error)
    })
}

const eliminarPizza = (req, res)=>{
    Pizza.deleteOne({_id:req.params.id},)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
} 


module.exports = {
    obtenerPizza,
    obtenerUnaPizza,
    crearPizza,
    editarPizza,
    eliminarPizza
}
