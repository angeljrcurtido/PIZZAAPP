import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './style.css'

import TodosPedidos from './TodosPedidos'


const PizzaOrden = () => {
    //edicion de objeto

    const [pizza, setPizza] = useState({})

    //obtener id
    const { id } = useParams()
    //redireccionamiento
    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:8000/api/obtenerunapizza/${id}`, { withCredentials: true })
            .then((res) => {
                console.log(res)
                setPizza(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const borrarPizza = () => {
        axios.delete(`http://localhost:8000/api/borrarpizza/${id}`, { withCredentials: true })
            .then((res) => {
                console.log(res)
                setPizza(res.data)
                navigate(`/unapizza/${res.data._id}`)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='confirmacion2'>
            <h1 className='pizzatop'>PIZZA TOP</h1>
            <div className='confirmacion'>
                
                <div className='cajaorden'>
                    <div className='tuorden'>
                        {/*<img src={serie.portada} alt="" />*/}
                        <h2>TU ORDEN</h2>
                        <p>Metodo:{pizza.metodo}: </p>
                        <p>Tamaño: {pizza.dimension}</p>
                        <p>Corteza: {pizza.corteza}</p>
                        {/*<p>Año:{serie.year}</p>
        <p>Creador:{serie.creador}</p>*/}
                        <Link className='btn btn-success' to={`/editarpedido/${id}`}>Editar Pedido</Link>
                        <button className='btn btn-danger' onClick={borrarPizza}>Borrar Pedido</button>
                    </div>
                </div>
                <div className='pruebascroll'>
                    <TodosPedidos />
                </div>
            </div>
        </div>

    )

}

export default PizzaOrden