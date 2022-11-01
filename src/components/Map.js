import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


const Map = () => {
  return (
    <div className='md:w-1/2 space-y-5 md:pt-5 md:block flex flex-col items-center'>
      <h3 className='font-bold'>Nuestras redes:</h3>
      <div className='space-x-5'>
        <FontAwesomeIcon className='cursor-pointer' icon="fa-brands fa-square-instagram" size="2x" />
        <FontAwesomeIcon className='cursor-pointer' icon="fa-brands fa-facebook" size="2x" />
        <FontAwesomeIcon className='cursor-pointer' icon="fa-brands fa-square-whatsapp" size="2x" />
        <FontAwesomeIcon className='cursor-pointer' icon="fa-brands fa-facebook-messenger" size="2x" />
      </div>
      <h3 className='font-bold'>Donde nos encontramos:</h3>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.247496625417!2d-64.29273588500438!3d-36.620428779985964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cd07f1ff0ef7%3A0xd601e8fcc9f3dacc!2sAv.%20San%20Mart%C3%ADn%20163%2C%20Santa%20Rosa%2C%20La%20Pampa!5e0!3m2!1ses-419!2sar!4v1666798556123!5m2!1ses-419!2sar" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map



