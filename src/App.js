import  Navbar  from './components/Navbar'
import ProductSection from './components/ProductSection'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './navbar.css'


function App() {
	return <>
		<ShoppingContextProvider>
			<Navbar/>
			<ProductSection />
		</ShoppingContextProvider>
	</>
}

export default App
