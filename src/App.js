import Header from "./Components/Header/Header";
import Home from "./Modules/Home";
import Catalogo from "./Modules/Catalogo";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./Modules/Products";
import Usuario from "./Components/Usuario/Usuario";
import UserHome from "./Components/Usuario/handleSubmit";
import Carrito from "./Modules/Carrito";
import Singup from "./Components/Usuario/Singup";


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Proyecto-5-Ecomers" element={<Home />} />
      <Route path="/Proyecto-5-Ecomers/" element={<Home />} />
      <Route path="/product/:id" element={<Products />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/registro" element={<Usuario />} />
      <Route path="/registro/nuevo" element={<Singup />} />
      <Route path="/usuario/perfil" element={<UserHome/>} />




    </Routes>
    <Footer />
    </>
  );
}

export default App;
