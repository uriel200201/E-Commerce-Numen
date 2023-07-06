import Contacto from '../components/contacto/Contacto'
import Map from './Map'
import logo from '../img/logo.png'

const Footer = () => {
	return (
		<footer className='p-4 bg-gray-200 shadow md:justify-around dark:bg-gray-200'>
			<div className='md:flex'>
				<Contacto />
				<Map />
			</div>
			<div className='mt-5 md:flex md:items-center md:justify-between'>
				<a href='/#inicio' className='flex items-center mb-4 sm:mb-0'>
					<img
						src={logo}
						className='bg-gray-400 w-20 h-20 rounded-full'
						alt='Logo'
					/>
					<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
						EL TOQUE DE DULZURA QUE VOS NECESITAS
					</span>
				</a>
				<ul className='flex flex-wrap items-center mb-6 text-xl text-gray-900 dark:text-white'>
					<li>
						<a
							href='/#inicio'
							className='mr-4 hover:underline md:mr-6 '>
							Inicio
						</a>
					</li>
					<li>
						<a
							href='/#ofertas'
							className='mr-4 hover:underline md:mr-6'>
							Ofertas
						</a>
					</li>
					<li>
						<a
							href='/#about'
							className='mr-4 hover:underline md:mr-6 '>
							About
						</a>
					</li>
					<li>
						<a
							href='/#products'
							className='mr-4     hover:underline md:mr-6'>
							Productos
						</a>
					</li>
					<li>
						<a
							href='./#contact'
							className='mr-4 hover:underline md:mr-6'>
							Contacto
						</a>
					</li>
				</ul>
			</div>
			<hr className='my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8' />
			<span className='block text-sm text-black-500 sm:text-center dark:text-gray-400'>
				© 2023{' '}
				<a href='/' className='hover:underline'>
					La Petite
				</a>
				. Todos los derechos reservados.
			</span>
		</footer>
	)
}

export default Footer
