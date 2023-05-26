import React from "react";
import { useNavigate } from "react-router-dom";

function cart() {
  
  const carts =JSON.parse(localStorage.getItem('cart')) || [] 

  const removeCart = (id) =>{
    const updateCard = carts.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updateCard))
    window.location.reload();
  }


    return (
      <div>
        <div>
            <h4 className="text-5xl text-center mt-8 ">Carrito</h4>
        </div>
        {
          carts?.map(cart =>{
            return(
              <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt={cart.title}
                    className="sm:w-1/4 w-full lg:h-auto h-64 object-cover object-center rounded"
                    src={cart?.image}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {cart?.title}
                    </h1>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">
                        {cart.price}$
                      </span>
                      <div className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => removeCart(cart.id)}> Remove</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            )
          })
        }
            
      </div>
    );
}

export default cart;
