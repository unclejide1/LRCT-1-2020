import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

   const handleSubmit = (e) => {
    e.preventDefault();
    
    try{
      let colors = new Values(color).all(10)
      setList(colors)
    }catch(error){
      setError(true)
     console.log(error)
    }
    
    
   }


   useEffect(() => {
     const timeout = setTimeout(() => {
       setError(false)
     }, 3000)
     
     return () => clearTimeout(timeout)
   }, [error])
   
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className='errorText'> pass in right values</p>}
          <input
            type='text'
            name='color'
            id='color'
            value={color}
            placeholder='#f15025'
            onChange={(e) => setColor(e.target.value)}
            className = {`${error ? 'error': null}`}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          console.log(color)
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
      </section>
    </>
  )
}

export default App
