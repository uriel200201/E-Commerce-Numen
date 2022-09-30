import  Navbar  from './components/navbar/Navbar'
import ProductSection from './components/navbar/ProductSection_test'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './css/navbar.css'


function App() {
	return <>
		<ShoppingContextProvider>
			<Navbar />
			<ProductSection />
			{/* Componentes para productos del carrito iran dentro de ShoppingContextProvider */}

		</ShoppingContextProvider>
	</>
}

export default App
