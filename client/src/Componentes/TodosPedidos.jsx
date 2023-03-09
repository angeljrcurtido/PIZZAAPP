import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css'
import pizzatop from './imagen/pizza_top.png'
import pizzatop2 from './imagen/piza_top2.png'
import { Navigate, useNavigate } from 'react-router-dom'

const TodosPedidos = () => {

    const [lista, setLista] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) => {

        e.preventDefault()
        axios.get('http://localhost:8000/api/logout', {
            email, password
        }, { withCredentials: true })
            .then((res) => {
                console.log(res)
                navigate('/login')
            }).catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {

        axios.get('http://localhost:8000/api/obtenerpizza/', { withCredentials: true })
            .then((res) => {
                console.log(res)
                setLista(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='border m-3rem' style={{ background: "burlywood" }} >
            <div className='bloqueprimero'>
                <img src={pizzatop} alt="pizzatop" className='logopedidos' />
                <h1 className='tituloprincipal'>Pedidos Anteriores</h1>
                <div className='cajadebotones'>
                    <button onClick={submitHandler} className='btn btn-success logout'>LogOut</button>
                    <Link to={'/nuevapizza'} className='btn btn-success primero' >Crear Nuevo Pedido</Link>
                </div>
            </div>

            <div className='cajasupergrande'>
            {
               
                lista.map((pedidos) => (
                    <div className='cajaflex'>
                    <div className='border pb-4 ms-5 me-5 pt-3 mt-3 todos'>

                        <img src={pizzatop2} alt="pizzatop2" className='pizzatop2' />
                        <h2>{pedidos.metodo}</h2>
                        <p>{pedidos.corteza}</p>
                        <p>{pedidos.cobertura}</p>
                        <p>{pedidos.created}</p>

                        <Link to={`/unapizza/${pedidos._id}`} className='d-block' >Mas informacion</Link>

                    </div>
                    </div>
                ))

               
            }
            </div>
        </div>

     
    )
}

export default TodosPedidos