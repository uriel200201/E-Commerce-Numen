import React from 'react'
import { Button, Textarea, TextInput, Label, Alert } from 'flowbite-react'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Formulario = () => {
	return (
		<div className='px-3'>
			<form className=''>
				<div className='grid md:grid-cols-2 md:gap-x-3 pb-3'>
					<div>
						<Label htmlFor='nombre'>Nombre:</Label>
						<TextInput
							type='text'
							name='nombre'
							id='nombre'
							placeholder='Jhon'
							required
						/>
					</div>
					<div>
						<Label htmlFor='apellido'>Apellido:</Label>
						<TextInput
							type='text'
							name='apellido'
							id='apellido'
							placeholder='Doe'
							required
						/>
					</div>
				</div>
				<div className='grid md:grid-cols-2 md:gap-x-3 pb-3'>
					<div>
						<Label htmlFor='correo'>Correo:</Label>
						<TextInput
							type='email'
							name='correo'
							id='correo'
							placeholder='ejemplo@correo.com'
							required
						/>
					</div>
					<div>
						<Label htmlFor='asunto'>Asunto:</Label>
						<TextInput
							type='text'
							name='asunto'
							id='asunto'
							placeholder='asunto'
							required
						/>
					</div>
				</div>
				<div className='pb-5'>
					<Label htmlFor='mensaje'>Mensaje:</Label>
					<Textarea
						name='mensaje'
						id='mensaje'
						cols='50'
						rows='5'
						placeholder='Ingrese su consulta'
						required
					/>
				</div>
			</form>
			<div className='flex flex-col items-center'>
				<Button type='submit' size='lg' className='w-full'>
					Enviar
				</Button>
				<div className='py-3'>
					<Alert color='success' id='exito'>
						<span>El email se ha enviado satisfactoriamente</span>
					</Alert>
					<Alert color='failure' id='fallo'>
						<span>
							<FontAwesomeIcon icon='fa-solid fa-circle-info' />
							Ha ocurrido un error no se ha podido enviar el
							correo
						</span>
					</Alert>
				</div>
			</div>
		</div>
	)
}

export default Formulario
