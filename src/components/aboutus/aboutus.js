
import React from 'react'
import pasteleros from '../../img/pasteleros.jpg';
import '../../css/aboutus.css'




const Aboutus = () => {
  return (

  
    <section id='about' className='history-container'>
      <div className='title-container'>
            <h1 className='history-title'>NUESTRA HISTORIA</h1>
            <img className='history-photo' src= {pasteleros} alt=""></img> 
      </div>
            <div className='history-article'>
                    <p> Somos una empresa familiar de la ciudad de Villa Carlos Paz creada a partir de la necesidad de cambiar
                    nuestros hábitos alimenticios por otros mas sanos y naturales.
                    En la búsqueda constante de variedad y alternativas ricas que no fuesen hechas a partir de azúcar o harinas
                    refinadas, nos dimos cuenta de que no había oferta en el mercado local que satisficiera nuestra necesidad de comprar
                    productos elaborados de pastelerías, ya fuesen para eventos, reuniones o simples gustos.
                    Es por ello que decidimos comenzar a elaborarlos nosotros, primeramente, para nuestros allegados, pero pronto
                    tuvimos una gran demanda de nuestra comunidad y fue momento de dar el siguiente paso con nuestro primer local
                    comercial.
                    </p>
                    <br/>
                <h2>MISIÓN</h2>
                    <p>Determinar, anticipar y satisfacer las necesidades de alimentación saludables de la comunidad,
                    elaborando y comercializando productos de repostería, nutritivos y de calidad. Manteniendo la tradición del
                    sabor a través de procesos eficientes y amigables con el medioambiente, apoyando el valor y desarrollo de las
                    personas que la componen. Continuando con la búsqueda de distinción en el mercado y agregando valor a la
                    comunidad.</p>
                    <br/>
                <h2>VISIÓN</h2>
                    <p>Ser una empresa familiar líder y en continuo crecimiento. Con presencia local y expansión nacional.
                    Distinguida por proporcionar calidad en la elaboración de sus productos y en el servicio de atención requerido
                    por nuestros clientes.</p>
            </div> 
    </section>
  )
}

export default Aboutus