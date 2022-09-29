import  Navbar  from './components/Navbar'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './navbar.css'


function App() {
	return <>
		<ShoppingContextProvider>
			<Navbar/>

			{/* Componente de tarjetas para carrito aqui */}

		</ShoppingContextProvider>
	</>
}

export default App
