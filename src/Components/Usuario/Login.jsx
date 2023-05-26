import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [nombre,setNombre] =useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("direccion", direccion);
    
    navigate("/usuario/perfil");
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Iniciar Sesión</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id='nombre'>
              <Form.Label className='mt-2'>Nombre Completo</Form.Label>
              <Form.Control 
              type='text'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              />
            </Form.Group>

            <Form.Group id='email'>
              <Form.Label className='mt-2'>Correo electrónico</Form.Label>
              <Form.Control
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </Form.Group>
            <Form.Group id='password'>
              <Form.Label className='mt-2'>Contraseña</Form.Label>
              <Form.Control
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

           

              

            </Form.Group>
            <Button className='w-100 mt-4 btn btn-primary ' type='submit'>Iniciar</Button>
          </Form>
          <div className='w-100 text-center mt-3'>
            <Link to="/">Olvidé mi contraseña</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        ¿No tienes una cuenta? <Link to="/registro/nuevo">Registrarse</Link>
      </div>
    </>
  )
}

export default Login;