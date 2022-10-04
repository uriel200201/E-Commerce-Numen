import Header from './components/Header'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './css/header.css'


function App() {
	return <>
		<ShoppingContextProvider>
			<Header />
			{/* Componentes para productos del carrito iran dentro de ShoppingContextProvider */}

		</ShoppingContextProvider>
	</>
}

export default App
