import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>

            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Bienvenido</h2>
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
            </div>

            <div className='w-100 text-center mt-2'>
                ¿No tienes una cuenta? <Link to="/singup">Registrarse</Link>
            </div>
        </>
    )
}

export default Home