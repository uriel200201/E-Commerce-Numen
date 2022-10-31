import React, { useState, useRef } from 'react'
import { Button, Textarea, TextInput, Label, Alert } from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from '@emailjs/browser'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { basicSchema } from '../../schema/basicSchema'

const Formulario = () => {
	const [msgOk, setMsgOk] = useState(false)
	const [msgError, setMsgError] = useState(false)
	const serviceID = 'service_ug71uff'
	const templateID = 'template_hdggurp'
	const form = useRef()

	const CustomInputComponent = ({
		field, // { name, value, onChange, onBlur }
		form: { errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
		...props
	}) => {
		if (field.name === 'mensaje') {
			return (
				<div>
					<Textarea {...field} {...props} />
					<ErrorMessage
						name={field.name}
						component={() => (
							<div className='text-sm text-red-500'>
								<FontAwesomeIcon
									icon='fa-solid fa-circle-info'
									className='pr-[5px]'
								/>
								{errors[field.name]}
							</div>
						)}
					/>
				</div>
			)
		} else {
			return (
				<div>
					<TextInput {...field} {...props} />
					<ErrorMessage
						name={field.name}
						component={() => (
							<div className='text-sm text-red-500'>
								<FontAwesomeIcon
									icon='fa-solid fa-circle-info'
									className='pr-[5px]'
								/>
								{errors[field.name]}
							</div>
						)}
					/>
				</div>
			)
		}
	}

	return (
		<div className='px-3 text-left'>
			<Formik
				initialValues={{
					nombre: '',
					apellido: '',
					correo: '',
					asunto: '',
					mensaje: '',
				}}
				onSubmit={(values, { resetForm }) => {
					try {
						emailjs
							.send(
								serviceID,
								templateID,
								values,
								'zmWTa1_KPMFHXCQGB'
							)
							.then(
								() => {
									resetForm()
									setMsgOk(true)
									setTimeout(() => setMsgOk(false), 5000)
									console.log('Formulario enviado')
								},
								(error) => {
									resetForm()
									setMsgError(true)
									setTimeout(() => setMsgError(false), 5000)
									console.log(
										'No se pudo enviar ' + error.text
									)
								}
							)
					} catch {
						resetForm()
						setMsgError(true)
						setTimeout(() => setMsgError(false), 5000)
						console.log('No se pudo enviar ')
					}
				}}
				validationSchema={basicSchema}
			>
				{() => (
					<Form id='form' ref={form}>
						<div className='grid md:grid-cols-2 md:gap-x-3 pb-3'>
							<div>
								<Label htmlFor='nombre'>Nombre:</Label>
								<Field
									component={CustomInputComponent}
									type='text'
									name='nombre'
									id='nombre'
									placeholder='Jhon'
									// required
								/>
							</div>
							<div>
								<Label htmlFor='apellido'>Apellido:</Label>
								<Field
									component={CustomInputComponent}
									type='text'
									name='apellido'
									id='apellido'
									placeholder='Doe'
									// required
								/>
							</div>
						</div>
						<div className='grid md:grid-cols-2 md:gap-x-3 pb-3'>
							<div>
								<Label htmlFor='correo'>Correo:</Label>
								<Field
									component={CustomInputComponent}
									type='email'
									name='correo'
									id='correo'
									placeholder='ejemplo@correo.com'
									// required
								/>
							</div>
							<div>
								<Label htmlFor='asunto'>Asunto:</Label>
								<Field
									component={CustomInputComponent}
									type='text'
									name='asunto'
									id='asunto'
									placeholder='asunto'
									// required
								/>
							</div>
						</div>
						<div className='pb-5'>
							<Label htmlFor='mensaje'>Mensaje:</Label>
							<Field
								component={CustomInputComponent}
								as='textarea'
								name='mensaje'
								id='mensaje'
								cols='50'
								rows='5'
								placeholder='Ingrese su consulta'
								// required
							/>
						</div>
						<div className='flex flex-col items-center gap-y-3'>
							<Button type='submit' size='lg' className='w-full'>
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
											El email se ha enviado
											satisfactoriamente
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
											Ha ocurrido un error no se ha podido
											enviar el correo
										</span>
									</Alert>
								</div>
							)}
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default Formulario
