import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css'
import { useNavigate } from 'react-router-dom';
import pizzatop from './imagen/pizza_top.png'



const PizzaFormulario = () => {

    const [metodo, setMetodo] = useState('');
    const [dimension, setDimension] = useState('');
    const [corteza, setCorteza] = useState('');
    const [qty, setQty] = useState('');
    const [cobertura, setCobertura] = useState('');
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/crearpizza',
            { metodo, dimension, corteza, qty, cobertura })
            .then((res) => {
                console.log(res.data._id, 'Llega por then')
                navigate(`/unapizza/${res.data._id}`)
            }).catch((err) => {
                console.log(err, 'Llega por catch')
                setErrors(err.response.data.errors)
            })
    }
//PARA EL PRECIO DE DELIVERY
    const categorias = [{
        "Tipo": "Delivery",
        "Precio": [5000],

    },
    {
        "Tipo": "Presencial",
        "Precio": [3000],
    }
    ]
    console.log("categorias", categorias);
    //Estado para guardar el id del delivery o del presencial 
    const [idArticulos, setIdArticulos] = useState(-1);
    //Aqui cree una funcion que al captar el evento de cambio en el select de Metodo el ya envia el id
    //porque el id me dice si es delivery (0) o presencial (1)
    const handlerCargarArticulos = function (e) {
        //Aca se guarda en una variable opcion, el evento que se envia del select que es 0 o 1 
        const opcion = e.target.value;
        // Aqui imprimo en un console.log para comprobar que si funciona
        console.log(opcion);
        //Luego para que con ese resultado me guarde en mi estado metodo el string Presencial o Delivery
        //Si opcion tiene el array 1 se va guardar en el metodo el string Presencial 
        if (opcion === "1") {
            setMetodo("Presencial")
        //Sino si opcion es igual a 0 entonces guardar en mi meotod el string Delivery
        }else if (opcion === "0") {
            setMetodo("Delivery")
            
        }
        setIdArticulos(opcion);
        console.log(metodo)
    }
   

    return (
        <div className='col-6 mx-auto'>

            <div className='bloqueprimero'>
                <img src={pizzatop} alt="pizzatop" className='logopedidos' />
                <h1 className='tituloprincipal'>Crear Pizza</h1>

                <Link to={'/todospedidos'} className='btn btn-success pedidos' >Pedidos Anteriores</Link>
            </div>
            <form onSubmit={submitHandler} className='border'>
                {/*<input type="text" className='form-control' onChange={(e)=>setMetodo(e.target.value)}/>*/}

                <div className="row mb-3">
                    <label htmlFor="select" className="col-sm-2 col-form-label">Metodo:</label>
                    <div className="col-sm-10">
                        <select className="form-control"  onClick={handlerCargarArticulos}>
                            <option value={-1}>Seleccione una opción:</option>
                            {
                                categorias.map((item, i) => (
                                    <option key={"tipo" + i} value={i}> {item.Tipo} </option>
                                ))
                            }
                        </select>
                        {errors.metodo ? <span className='text-danger'>{errors.metodo.message}</span> : null} <br />
                    </div>
                </div>

                <div className="prueba">
                    <label htmlFor="select" className="col-sm-2 col-form-label">Tamaño:</label>
                    <div className="col-sm-3">
                        <select className="form-control" onChange={(e) => setDimension(e.target.value)}>
                            <option>Seleccionar</option>
                            <option value="Largo">Largo</option>
                            <option value="Corto">Corto</option>
                        </select>
                        {errors.dimension ? <span className='text-danger'>{errors.dimension.message}</span> : null} <br />
                    </div>
                    <label htmlFor="select" className="col-sm-2 col-form-label">Corteza:</label>
                    <div className="col-sm-3">
                        <select className="form-control" onChange={(e) => setCorteza(e.target.value)}>
                            <option>Seleccionar</option>
                            <option value="Crocante">Crocante</option>
                            <option value="NoCrocante">NoCrocante</option>
                        </select>
                        {errors.corteza ? <span className='text-danger'>{errors.corteza.message}</span> : null} <br />
                    </div>
                    <label htmlFor="select" className="col-sm-1 col-form-label">QTY:</label>
                    <div className="col-sm-0">
                        <select className="form-control" onChange={(e) => setQty(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>

                </div>

                <div className="row mb-3">
                    <label htmlFor="select" className="col-sm-2 col-form-label">Cobertura:</label>
                    <div className="col-sm-8 border rounded mt-2 ms-2" onChange={(e) => setCobertura(e.target.value)}>
                        <label><input className='input1' type="checkbox" id="cbox1" value="Pepperoni" />Pepperoni</label>

                        <input className='input1' type="checkbox" id="cbox2" value="Jamon" /> <label htmlFor="cbox2">Jamon</label>
                        <label><input className='input1' type="checkbox" id="cbox1" value="Queso" />Queso</label>

                        <input className='input1' type="checkbox" id="cbox2" value="Lomito" /> <label htmlFor="cbox2">Lomito</label>
                        <label><input className='input1' type="checkbox" id="cbox1" value="Napolitana" />Napolitana</label>


                    </div>
                    {errors.cobertura ? <span className='text-danger'>{errors.cobertura.message}</span> : null} <br />
                </div>

                <div className='col-6'>
                    <h3>Costo</h3>

                    <div>
                        {
                        
                        idArticulos > -1 && (categorias[idArticulos].Precio.map((item,i)=>(
                            <h2>{item}.Gs</h2>
                        )))
                        
                        }
                    </div>
                </div>
                <button className='btn btn-success mt-3'>AÑADIR A LA ORDEN</button>

            </form>
        </div>
    )
}

export default PizzaFormulario