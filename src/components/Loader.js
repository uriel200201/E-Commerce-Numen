import { useState, useEffect } from 'react'

const Loader = () => {

  const [dots, setDots] = useState('.')

  let dot_count = 1
  
  useEffect(() => {
    setInterval(() => {
      let dotString = ''
      for (let i = 0; i <= dot_count; i++) {
        dotString += '.'
      }
      setDots(dotString)
      if (dot_count < 5) {
        // eslint-disable-next-line
        dot_count += 1
      } else {
        // eslint-disable-next-line
        dot_count = 1
      }
    }, 50)
  }, [])

  return (
    <div className='loader text-2xl'>{dots}</div>
  )
}

export default Loader