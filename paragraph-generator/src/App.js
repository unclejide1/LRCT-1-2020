import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    if(count <= 0){
      window.alert("you can not generate paragraphs of 0 or negative value")
      return
      
    }
    if(count > 9){
       window.alert('you can not generate paragraphs of more than length of 9 for now')
      amount = 9
    }
    setText(data.slice(0, amount))
  }
  
  return (
    <section className='section-center'>
      <h2>tired of boring lorem ipsum</h2>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
        
      </article>
    </section>
  )
}

export default App
