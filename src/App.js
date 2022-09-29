import  Navbar  from './components/Navbar'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './navbar.css'


function App() {
	return <>
		<ShoppingContextProvider>
			<Navbar />

			{/* Componentes para productos del carrito iran dentro de ShoppingContextProvider */}

		</ShoppingContextProvider>

	</>
}

export default App
