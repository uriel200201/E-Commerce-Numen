import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ShoppingCart from './ShoppingCart'
import ItemCount from './ItemCount'
import lapetite from '../../img/lapetite.png'

library.add(fas, faBars, faCartShopping)

const Navbar = () => {

    let expanded = false,
        expandeddrop = false,
        $navbar,
        $navLink,
        $dropdown,
        navbarH,
        navLinkH;

    const setNavbar = () => {
        $navbar = document.querySelector('.navbar');
        $navLink = document.querySelector('.nav-link');
        $dropdown = document.querySelector('.dropdown-menu');
        navbarH = $navbar.clientHeight;
        navLinkH = $navLink.clientHeight;

        if (window.innerWidth < 768) {
            $navbar.style.height = navbarH - navLinkH + 'px'
        }
    }


    useEffect(() => {
        setNavbar()
        // eslint-disable-next-line
    }, [])

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
            $navbar.style.overflow = "visible"
            $dropdown.classList.remove("opacity-0")
            $dropdown.classList.remove("pointer-events-none")
            expandeddrop = true
        } else {
            $navbar.style.overflow = "hidden"
            $dropdown.classList.add("opacity-0")
            $dropdown.classList.add("pointer-events-none")
            expandeddrop = false
        }

    }

    return (
        <nav className="navbar flex flex-wrap bg-[#ff5d5d] text-white overflow-hidden md:flex-row md:flex-nowrap md:justify-between md:px-10">
            <div className='img-logo w-[50%] md:w-auto'>
                <img className="h-20" src={lapetite} alt="La petite" />
            </div>
            <div className='burguer w-[50%] flex justify-end md:hidden'>
                <button onClick={expandNav} className="burguer-button mr-5">
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                </button>
            </div>
            <ul className='nav-link text-[18px] flex flex-col items-center space-y-2 pb-5 w-[100%] md:flex-row md:w-auto md:items-center md:pb-0 md:space-y-0'>
                <li><a href="../App.js" className='md:mr-3 hover:underline'>Inicio</a></li>
                <li><a href="../App.js" className='md:mr-3 hover:underline'>Ofertas</a></li>
                <li><a href="../App.js" className='md:mr-3 hover:underline'>About</a></li>
                <li><a href="../App.js" className='md:mr-3 hover:underline'>Producto</a></li>
                <li><a href="#Contacto" className='md:mr-3 hover:underline'>Contacto</a></li>
                <li className='dropdown-cart flex justify-center relative md:mr-3 md:justify-end'>
                    <button className='relative flex justify-center items-center' onClick={dropdown}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" size='xl' /><ItemCount /></button>
                    <ShoppingCart />
                </li>
            </ul>
        </nav>
    )
}
export default Navbar