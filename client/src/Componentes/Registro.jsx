import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './style.css'
import imagenfondo from './imagen/escritorio.png'

const Registro = () => {

    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const [confirmPassword,setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/registrar', {
            nombre, apellido, email, password, confirmPassword
        }, {withCredentials:true})
        .then((res)=>{
            console.log(res)
            navigate('/todospedidos')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
  return (   
    <div className='cajadelogin2'>
         <img className='imagenfondo' src={imagenfondo} alt="imagenfondo" />
         <div className='subcaja'>
        <form onSubmit={submitHandler} className='col-6 mx-auto'>
            <label htmlFor=""  className='form-label text-light fw-bolder fs-3'>Nombre:</label>
            <input type="text" className='form-control' onChange={(e)=>setNombre(e.target.value)}/>
            {errors.nombre ?<span className='text-danger'>{errors.nombre.message}</span>:null} <br/>
            <label htmlFor=""  className='form-label text-light fw-bolder fs-3'>Apellido:</label>
            <input type="text" className='form-control' onChange={(e)=>setApellido(e.target.value)}/>
            {errors.apellido ?<span className='text-danger'>{errors.apellido.message}</span>:null} <br/>
            <label htmlFor="" className='form-label text-light fw-bolder fs-3'>Email:</label>
            <input type="text" className='form-control'onChange={(e)=>setEmail(e.target.value)}/>   
            {errors.email ?<span className='text-danger'>{errors.email.message}</span>:null} <br/>
            <label htmlFor="" className='form-label text-light fw-bolder fs-3'> Password:</label>
            <input type="password" className='form-control'onChange={(e)=>setPassword(e.target.value)}/>
            {errors.password ?<span className='text-danger'>{errors.password.message}</span>:null} <br/>
            <label htmlFor="" className='form-label text-light fw-bolder fs-3'> Confirm Password:</label>
            <input type="password" className='form-control'onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <button className='btn btn-primary mt-3'> Registrate!!!</button>
        </form>
        </div>
    </div>
    
  )
}

export default Registro