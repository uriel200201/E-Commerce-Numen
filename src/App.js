import Contacto from './components/contacto/Contacto'
import Navbar from './components/navbar/Navbar'
import ProductSection from './components/navbar/ProductSection_test'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './css/navbar.css'

function App() {
	return (
		<>
			<ShoppingContextProvider>
				<Navbar />

				{/* Componentes para productos del carrito iran dentro de ShoppingContextProvider */}
			</ShoppingContextProvider>
			<Contacto />
		</>
	)
}

export default App
