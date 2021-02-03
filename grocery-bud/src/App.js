import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEdit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({show: false, msg: '', type:''})

   const handleSubmit = (e) => {
     e.preventDefault()
    console.log('submitted')
    console.log(name)
    
   }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            placeholder='e.g eggs'
            onChange={(e) => setName(e.target.value)}
            className="grocery"
          />
          <button type='submit' className='submit-btn'>
            {isEdit ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>clear</button>
      </div>
    </section>
  )
}

export default App
