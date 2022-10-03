import React, { useState, useRef } from 'react'
import { Button, Textarea, TextInput, Label, Alert } from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from '@emailjs/browser'

const Formulario = () => {
	const [msgOk, setMsgOk] = useState(false)
	const [msgError, setMsgError] = useState(false)
	const serviceID = 'service_ug71uff'
	const templateID = 'template_hdggurp'
	const form = useRef()

	const enviar = async (e) => {
		e.preventDefault()
		console.log('enviando')
		await emailjs
			.sendForm(serviceID, templateID, form.current, 'zmWTa1_KPMFHXCQGB')
			.then(
				() => {
					setMsgOk(true)
					setTimeout(() => setMsgOk(false), 5000)
					console.log('Formulario enviado')
				},
				(error) => {
					setMsgError(true)
					setTimeout(() => setMsgError(false), 5000)
					console.log('No se pudo enviar ' + error.text)
				}
			)
	}

	return (
		<div className='px-3'>
			<form id='form' ref={form}>
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
			<div className='flex flex-col items-center gap-y-3'>
				<Button
					type='submit'
					size='lg'
					className='w-full'
					onClick={enviar}
				>
					Enviar
				</Button>
				{msgOk && (
					<div>
						<Alert color='success' id='exito'>
							<span>
								<FontAwesomeIcon
									icon='fa-solid fa-circle-check'
									className='pr-[5px]'
								/>
								El email se ha enviado satisfactoriamente
							</span>
						</Alert>
					</div>
				)}
				{msgError && (
					<div>
						<Alert color='failure' id='fallo'>
							<span>
								<FontAwesomeIcon
									icon='fa-solid fa-circle-info'
									className='pr-[5px]'
								/>
								Ha ocurrido un error no se ha podido enviar el
								correo
							</span>
						</Alert>
					</div>
				)}
			</div>
		</div>
	)
}

export default Formulario
