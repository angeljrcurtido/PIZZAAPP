import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Navigate,useNavigate } from 'react-router-dom'
import './style.css'


const Login = () => {
    
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const navigate = useNavigate ()
    
    
    const submitHandler = (e) =>{
        
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
            email, password
        }, {withCredentials: true})
        .then((res)=>{
            console.log(res)
            navigate('/todospedidos')
        }).catch((err)=>{
            console.log(err)
        })
    }
    

  return (
    <div className='cajadelogin'>
        <div className='logo'></div>
        <form onSubmit={submitHandler} className='col-6 mx-auto'>
            
            <h2 className='titulologin'>LOGIN</h2>
            <label htmlFor='' className='form-label email'>Email:</label>
            <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='' className='form-label password'>Password:</label>
            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
            <button className='btn btn-primary mt-3'>Login!!!</button>
            <Link to={'/registro'} className='btn btn-primary primero mt-3 ms-3' >Registrate!!!</Link>

        </form>
    </div>
  )
}

export default Login