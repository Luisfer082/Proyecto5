import React from "react";
import { Link } from "react-router-dom";

function Header() {

  const navigation =[
    {
      name: "Home",
      path: "/Proyecto-5-Ecomers"
    },
    
    {
      name: "Iniciar sesion",
      path: "/registro"
    },
    {
      name: "Perfil",
      path: "/usuario/perfil"
    },
    {
      name: "Carrito",
      path: "/carrito"
    }
  ]
  return (
    <header className="text-gray-600 body-font bg-pink-100 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={"/Proyecto-5-Ecomers/"} className="flex title-font cursor-poiter font-medium items-center text-gray-900 mb-4 md:mb-0">
          
          <span className="ml-3 text-2xl">El Baul</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        {
          navigation.map((navigation) =>{
            return(
              <Link to={navigation.path} className="mr-5 text-xl">{navigation.name}</Link>
            )
          })
        }
         
        </nav>
      </div>
    </header>
  );
}

export default Header;
