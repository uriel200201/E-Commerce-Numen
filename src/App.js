import Contacto from './components/contacto/Contacto'
import Navbar from './components/navbar/Navbar'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './css/navbar.css'
import Aboutus from './components/aboutus/Aboutus'


function App() {
	return (
		<>
			<ShoppingContextProvider>
				<Navbar />

				{/* Componentes para productos del carrito iran dentro de ShoppingContextProvider */}
				<Aboutus /> 
				<Contacto />
			</ShoppingContextProvider>
		</>
	)
}

export default App
