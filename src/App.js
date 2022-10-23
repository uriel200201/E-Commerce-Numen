import Aboutus from './components/aboutus/aboutus'
import Contacto from './components/contacto/Contacto'
import Header from './components/Header'
import ProductSection from './components/navbar/ProductSection'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import MyOwlCarousel from './components/slider/Carousel'
import './css/header.css'


function App() {
	return (
		<>
			<ShoppingContextProvider>
				
				<Header />
				<ProductSection />

			</ShoppingContextProvider>
			<MyOwlCarousel />
			<Aboutus />
			<Contacto />
		</>
	)
}

export default App
