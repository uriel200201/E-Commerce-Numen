import React from 'react'
import Cart from './Cart'
import lapetite from '../img/lapetite.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faBars, faCartShopping)

const Navbar = () => {
  return (
    <nav className="navbar flex flex-wrap bg-[#ff5d5d] text-white overflow-hidden md:flex-row md:flex-nowrap md:justify-between md:px-10">
        <div className='img-logo w-[50%] md:w-auto'>
            <img className="h-20" src={lapetite} alt="La petite"/>
        </div>
        <div className='burguer w-[50%] flex justify-end md:hidden'>
            <button onClick={expandNav} className="burguer-button mr-5">
                <FontAwesomeIcon icon="fa-solid fa-bars"/> 
            </button>
        </div>
        <div className='nav-link text-[18px] flex flex-col items-center space-y-2 pb-5 w-[100%] md:flex-row md:w-auto md:items-center md:pb-0 md:space-y-0'>
            <a href="../App.js" className='md:mr-3'>Inicio</a>
            <a href="../App.js" className='md:mr-3'>Ofertas</a>
            <a href="../App.js" className='md:mr-3'>About</a> 
            <a href="../App.js" className='md:mr-3'>Producto</a> 
            <a href="../App.js" className='md:mr-3'>Contacto</a> 
            <a href="#" className='dropdown-cart flex justify-center relative md:mr-3 md:justify-end '><FontAwesomeIcon onClick={dropdown} icon="fa-solid fa-cart-shopping" />
            <div className='dropdown-menu text-center absolute translate-y-[26px] w-[100px] md:w-[107px] pointer-events-none opacity-0 bg-white text-black p-1 rounded-[5px] shadow'>
                <div className='dropdown-item p-1 rounded-[3px] hover:bg-slate-200'>torta</div>
                <div className='dropdown-item p-1 rounded-[3px] hover:bg-slate-200'>torta</div>
                <div className='dropdown-item p-1 rounded-[3px] hover:bg-slate-200'>torta</div>
                <div className='dropdown-item p-1 rounded-[3px] hover:bg-slate-200'>torta</div>
            </div>
            </a> 
        </div>
    </nav>
  )
}
let expandeddrop = false
let expanded = false,
    $navbar,
    $navLink,
    $dropdownh,
    $dropdownitem,
    navbarH,
    navLinkH,
    dropdownh,
    dropdownitem;



window.addEventListener('load', () => {

    $navbar = document.querySelector('.navbar');
    $navLink = document.querySelector('.nav-link');
    $dropdownh = document.querySelector('.dropdown-menu')
    $dropdownitem = document.querySelector('.dropdown-item')
    navbarH = $navbar.clientHeight;
    navLinkH = $navLink.clientHeight;
    dropdownh = $dropdownh.clientHeight;
    dropdownitem = $dropdownitem.clientHeight;

    if(window.innerWidth < 768) {
        $navbar.style.height = navbarH - navLinkH + 'px'
    }

})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && expanded) {
        $navbar.style.height = navbarH - navLinkH + 'px';
        expanded = false;
    }
})

const expandNav = () => {
    if (!expanded) {
        $navbar.style.height = navbarH + 'px'
        expanded = true
    } else {
        $navbar.style.height = navbarH - navLinkH + 'px'
        if (expandeddrop) {
            dropdown()
        }
        expanded = false
    }
    
}

const dropdown = () => {
    if (!expandeddrop) {
        $dropdownh.style.height = dropdownh + 'px'
        $navbar.style.overflow = "visible"
        $dropdownh.classList.remove("opacity-0")
        $dropdownh.classList.remove("pointer-events-none")
        expandeddrop = true
    } else {
        $dropdownh.style.height = dropdownh - dropdownitem + 'px'
        $dropdownh.classList.add("opacity-0")
        $dropdownh.classList.add("pointer-events-none")
        expandeddrop = false
    }
    
}
export default Navbar