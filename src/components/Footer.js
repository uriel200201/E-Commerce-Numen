import React from 'react';
import logo from '../../src/img/logo.png';

const texto = "El toque de dulzura que vos necesitas"

const Footer = () => {
  return (
    
<footer class="p-4 bg-slate-400 shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="" class="flex items-center mb-4 sm:mb-0">
            <img src={logo} class="bg-gray-500 w-20 h-20 rounded-full" alt="Logo"/>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{texto}</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="../App.js" class="mr-4 hover:underline md:mr-6 ">Inicio</a>
            </li>
            <li>
                <a href="../App.js" class="mr-4 hover:underline md:mr-6">Ofertas</a>
            </li>
            <li>
                <a href="../App.js" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="../App.js" class="hover:underline md:mr-6">Productos</a>
            </li>
            <li>
                <a href="../App.js" class="hover:underline">Contacto</a>
            </li>
        </ul>
    </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">La Petite</a>. Todos los derechos reservados.
    </span>
</footer>

  )
}

export default Footer