import * as yup from 'yup'

export const basicSchema = yup.object().shape({
	nombre: yup
		.string()
		.label('Nombre')
		.required('Este es un campo obligatorio')
		.min(2, 'Por favor coloque un nombre válido'),

	apellido: yup
		.string()
		.label('Apellido')
		.required('Este es un campo obligatorio')
		.min(2, 'Por favor coloque un apellido válido'),
	correo: yup
		.string()
		.email('Por favor ingrese un mensaje valido')
		.required('Este es un campo obligatorio'),
	asunto: yup
		.string()
		.label('Asunto')
		.required('Este es un campo obligatorio')
		.min(2, 'Por favor coloque un asunto válido'),
	mensaje: yup
		.string()
		.label('Mensaje')
		.required('Este es un campo obligatorio')
		.min(10, 'El mensaje debe contener al menos 10 caracteres'),
})
