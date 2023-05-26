import React from 'react'
import Login from './Login'
import { Container } from "react-bootstrap";


function Usuario() {
  return (
    <>
      <Container className="d-flex aling-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
        <Login></Login>

         </div>
      </Container>

      
    </>
  )
}

export default Usuario