import Carousel from './components/slider/Carousel'
import Contacto from './components/contacto/Contacto'
import Navbar from './components/navbar/Navbar'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './css/navbar.css'

function App() {
	return (
		<>
			<ShoppingContextProvider>
				<Navbar />

				{/* Componentes para productos del carrito iran dentro de ShoppingContextProvider */}
			</ShoppingContextProvider>
			<Carousel />
			<Contacto />
		</>
	)
}

export default App
