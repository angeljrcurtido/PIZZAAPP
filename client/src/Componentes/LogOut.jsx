import axios from 'axios'
import React, {useState} from 'react'
import { Navigate,useNavigate } from 'react-router-dom'
import './style.css'


const LogOut = () => {
    
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const navigate = useNavigate ()
    
    
    const submitHandler = (e) =>{
        
        e.preventDefault()
        axios.get('http://localhost:8000/api/logout', {
            email, password
        }, {withCredentials: true})
        .then((res)=>{
            console.log(res)
            navigate('/login')
        }).catch((err)=>{
            console.log(err)
        })
    }
    

  return (
    

        <form onSubmit={submitHandler} >
            <button className='btn btn-success mt-3 logout'>LogOut</button>
        </form>
    
  )
}

export default LogOut