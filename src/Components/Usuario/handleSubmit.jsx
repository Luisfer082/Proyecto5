import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function Dashboard() {

  const navigate = useNavigate()
  

  function handleLogout() {
    //logica de como cerrar sesion
    localStorage.clear()
    navigate('/login')
  }

  return (
    <>
    <div>
          <h2 className='text-center mb-4'>Perfil</h2>
    </div>
      <Card>
        <Card.Body>
          <div className='text-center'>
            <strong>Nombre:</strong> {localStorage.getItem('nombre')}
          </div>
        </Card.Body>
        <Card.Body>
          <div className='text-center'>
            <strong>Correo electrónico:</strong> {localStorage.getItem('email')}
          </div>
        </Card.Body>


      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>Cerrar Sesión</Button>
        
      </div>  
      

    </>
  )}