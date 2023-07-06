import petite_home from '../img/la_petite_home.png'

const Home = () => {
	return (
		<section
			id='inicio'
			className='home pt-[80px] md:pl-[10%] flex flex-col justify-center space-y-5 text-white'>
			<div className='flex justify-center md:justify-start'>
				<img
					className='w-[250px] md:w-[300px]'
					src={petite_home}
					alt='la petite'
				/>
			</div>
			<div className='flex justify-center md:justify-start'>
				<p className='home-text'>
					El toque de dulzura que <br /> vos necesitas
				</p>
			</div>
		</section>
	)
}

export default Home
