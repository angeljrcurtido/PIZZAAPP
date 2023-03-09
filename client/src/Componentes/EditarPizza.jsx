import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom';



const EditarPizza = () => {

 
    const [errors, setErrors] = useState({})
     //obtener id
     const {id} = useParams()
     //redireccionamiento
     const navigate = useNavigate()

     useEffect (()=>{

        axios.get(`http://localhost:8000/api/obtenerunapizza/${id}`,{withCredentials:true})
        .then((res)=>{
            console.log(res)
            setMetodo(res.data.metodo)
            setDimension(res.data.dimension)
            setCorteza(res.data.corteza)
            setQty(res.data.qty)
            setCobertura(res.data.cobertura)
        }).catch((err)=>{
            console.log(err)
        })
    },[])


    const [metodo, setMetodo] = useState('');
    const [dimension, setDimension] = useState('');
    const [corteza, setCorteza] = useState('');
    const [qty, setQty] = useState('');
    const [cobertura, setCobertura] = useState('');
 


  const submitHandler = (e) =>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/editarpizza/${id}`,{withCredentials:true}, 
    {metodo, dimension, corteza, qty, cobertura})
    .then((res)=>{
      console.log(res)
      navigate('/todospedidos')
    }).catch((err)=>{
      console.log(err)
      setErrors(err.response.data.errors)
    })
  }

  return (
    <div className='col-6 mx-auto'>
      <h1>Editar Pedido</h1>
      <form onSubmit={submitHandler} className='border'>
                {/*<input type="text" className='form-control' onChange={(e)=>setMetodo(e.target.value)}/>*/}

                <div className="row mb-3">
                    <label htmlFor="select" className="col-sm-2 col-form-label">Metodo:</label>
                    <div className="col-sm-10">
                        <select className="form-control" onChange={(e) => setMetodo(e.target.value)}>
                            <option>{metodo}</option>
                            <option value="Delivery">Delivery</option>
                            <option value="Presencial">Presencial</option>
                        </select>
                    </div>
                </div>

                <div className="prueba">
                    <label htmlFor="select" className="col-sm-2 col-form-label">Tamaño:</label>
                    <div className="col-sm-3">
                        <select className="form-control" onChange={(e) => setDimension(e.target.value)}>
                            <option>{dimension}</option>
                            <option value="Largo">Largo</option>
                            <option value="Corto">Corto</option>
                        </select>
                    </div>
                    <label htmlFor="select" className="col-sm-2 col-form-label">Corteza:</label>
                    <div className="col-sm-3">
                        <select className="form-control" onChange={(e) => setCorteza(e.target.value)}>
                            <option>{corteza}</option>
                            <option value="Crocante">Crocante</option>
                            <option value="NoCrocante">NoCrocante</option>
                        </select>
                    </div>
                    <label htmlFor="select" className="col-sm-1 col-form-label">QTY:</label>
                    <div className="col-sm-0">
                        <select className="form-control" onChange={(e) => setQty(e.target.value)}>
                            <option>{qty}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>

                </div>

                <div className="row mb-3">
                    <label htmlFor="select" className="col-sm-2 col-form-label">Cobertura:</label>
                    <div className="col-sm-8 border rounded mt-2 ms-2" onChange={(e)=>setCobertura(e.target.value)}>
                        <label><input className='input1' type="checkbox" id="cbox1" value="Pepperoni" />Pepperoni</label>

                        <input className='input1' type="checkbox" id="cbox2" value="Jamon" /> <label htmlFor="cbox2">Jamon</label>
                        <label><input className='input1' type="checkbox" id="cbox1" value="Queso" />Queso</label>

                        <input className='input1' type="checkbox" id="cbox2" value="Lomito" /> <label htmlFor="cbox2">Lomito</label>
                        <label><input className='input1' type="checkbox" id="cbox1" value="Napolitana" />Napolitana</label>

                    </div>
                </div>

                <button className='btn btn-success mt-3'>AÑADIR A LA ORDEN</button>
      </form>
    </div>
  )
}

export default EditarPizza