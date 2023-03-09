const mongoose = require ('mongoose')


//Schema

const PizzaSchema = mongoose.Schema({
    metodo:{
        type:String,
        required:[true, "Por favor selecciona una opción"],
    },
    dimension: {
        type: String,
        enum: [
            'Largo',
            'Corto'
        ],
        required:[true, "Falta seleccionar"],
    },
    corteza: {
        type: String,
        enum: [
            'Crocante',
            'NoCrocante'
        ],
        required:[true, "Falta seleccionar"],
    },
    qty: {
        type: Number,
        enum: [
            1,
            2
        ]
    },
    cobertura: {
        type: String,
        required:[true, "Por favor selecciona una opción"]
    },
    created: {
        type: Date,
        default: Date()
    },
    preciometodo: {
       type:Number,
    },
    preciodimension:{
        type:Number,
    },
    preciocobertura:{
        type:Number,
    }
});


const Pizza = mongoose.model('Pizza', PizzaSchema)
module.exports = Pizza
