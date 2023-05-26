import React, { useEffect, useState } from 'react'
import Products from '../Components/Products/Products'

function Catalogo() {
  const [products, setProducts] = useState([])
  useEffect(() =>{
    const fetchProducts = async () =>{
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
    <Products />
    {
      Products.length > 0 ?
      <Products products={products} />
      :
      <div> loadiag...</div>
    }
    </>
  )
}

export default Catalogo