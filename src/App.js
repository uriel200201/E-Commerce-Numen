import  Navbar  from './components/Navbar'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './navbar.css'


function App() {
	return <>
		<ShoppingContextProvider>
			<Navbar/>
		</ShoppingContextProvider>
	</>
}

export default App
