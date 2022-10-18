import Carousel from './components/slider/Carousel'
import Contacto from './components/contacto/Contacto'
import Navbar from './components/navbar/Navbar'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './css/navbar.css'
import Aboutus from './components/aboutus/aboutus'


function App() {
	return (
		<>
			<ShoppingContextProvider>
				<Navbar />

				{/* Componentes para productos del carrito iran dentro de ShoppingContextProvider */}
			</ShoppingContextProvider>
			<Carousel />
			<Aboutus />
			<Contacto />
		</>
	)
}

export default App
