import React from 'react'
import Formulario from './Formulario'

const Contacto = () => {
	return (
		<div className='text-center bg-slate-400 md:h-screen' id='contacto'>
			<h2 className='text-4xl'>Contacto</h2>
			<div className='flex flex-col md:flex-row md:items-center md:justify-around py-11'>
				<Formulario />
				{/* TODO: Agregar componentes de mapas y redes sociales se van a acomodar automáticamente*/}
			</div>
		</div>
	)
}

export default Contacto
