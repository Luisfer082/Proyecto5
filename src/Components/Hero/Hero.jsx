import React from 'react'

function Hero() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/5926462/pexels-photo-5926462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">El Baul
        <br className="hidden lg:inline-block"/>Tienda del todo 
      </h1>
      <p className="mb-8 leading-relaxed"> En nuestra tienda en línea, te ofrecemos una amplia variedad de productos de alta calidad a precios
          competitivos. Desde electrónica hasta moda, hogar y estilo de vida, tenemos todo lo que necesitas.</p>
     
    </div>
  </div>
</section>
  )
}

export default Hero