import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PizzaFormulario from './Componentes/PizzaFormulario';
import PizzaOrden from './Componentes/PizzaOrden';
import EditarPizza from './Componentes/EditarPizza';
import TodosPedidos from './Componentes/TodosPedidos';
import Registro from './Componentes/Registro';
import Login from './Componentes/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>

      <Route path='/nuevapizza' element = {<PizzaFormulario/>}/>
      <Route path='/unapizza/:id' element = {<PizzaOrden/>}/>
      <Route path='/editarpedido/:id' element = {<EditarPizza/>}/>
      <Route path='/todospedidos' element = {<TodosPedidos/>}/>
      <Route path='/registro' element={<Registro/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
