import Header from './components/Header'
import ProductSection from './components/navbar/ProductSection'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './css/header.css'


function App() {
	return <>
		<ShoppingContextProvider>
			<Header />
			<ProductSection />

			{/* Componentes para productos del carrito iran dentro de ShoppingContextProvider */}

		</ShoppingContextProvider>
	</>
}

export default App
