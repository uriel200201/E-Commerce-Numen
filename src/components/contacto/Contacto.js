import React from 'react'
import Formulario from './Formulario'

const Contacto = () => {
	return (
		<div className='text-center py-10 px-3 md:w-1/2' id='contact'>
			<h2 className='text-4xl pb-10'>Contacto</h2>
			<div className='flex flex-col md:flex-row md:items-center md:justify-around'>
				<Formulario />
				{/* TODO: Agregar componentes de mapas y redes sociales se van a acomodar automáticamente*/}
			</div>
		</div>
	)
}

export default Contacto
