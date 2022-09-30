import React from 'react'

const Formulario = () => {
	return (
		<div>
			<form>
				<div>
					<label htmlFor='nombre'>Nombre:</label>
					<input
						type='text'
						name='nombre'
						id='nombre'
						placeholder='Jhon'
						required
					/>
					<label htmlFor='apellido'>Apellido:</label>
					<input
						type='text'
						name='apellido'
						id='apellido'
						placeholder='Doe'
						required
					/>
				</div>
				<div>
					<label htmlFor='correo'>Correo:</label>
					<input
						type='email'
						name='correo'
						id='correo'
						placeholder='ejemplo@correo.com'
						required
					/>
					<label htmlFor='asunto'>Asunto:</label>
					<input
						type='text'
						name='asunto'
						id='asunto'
						placeholder='asunto'
						required
					/>
				</div>
				<textarea
					name='mensaje'
					id='mensaje'
					cols='50'
					rows='5'
					placeholder='Ingrese su consulta'
					required
				/>
				<button type='submit'>Enviar</button>
				<p id='exito'>El email se ha enviado satisfactoriamente</p>
				<p id='fallo'>El email no se ha podido enviar</p>
			</form>
		</div>
	)
}

export default Formulario
