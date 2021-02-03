import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(list)
  }
  else{
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage)
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({show: false, msg: '', type:''})

   const handleSubmit = (e) => {
     e.preventDefault()
     if(!name){
       showAlert(true, 'please enter value', 'danger')
     }
     else if(name && isEdit){
       const newList =list.map((item) => {
         if(item.id === editId){
           return {...item, title: name}
         }
         return name
       })
       setList(newList)
       setName('')
       setEditId(null)
       setIsEdit(false)
       showAlert(true, 'value changed', 'success')
     }
     else{
        showAlert(true, 'item added to the list', 'success')
        const newItem = {id: new Date().getTime().toString(), title: name}
        setList([...list, newItem]);
        setName('');
     }
    
    
   }
   useEffect(() => {
     const timeout = setTimeout(() => {
       showAlert()
     }, 3000)
     return () => clearTimeout(timeout)
   }, [list, alert])

   useEffect(() => {
     localStorage.setItem('list', JSON.stringify(list))
   }, [list])
   

   const showAlert = (show = false, msg = '', type = '') => {
     setAlert({ show, msg, type })
   }

   const clearList = () => {
     showAlert(true, 'empty list', 'danger')
     setList([])
   }

   const removeItem =(id) => {
     showAlert(true, 'item removed', 'danger')
     const newList = list.filter((item) => item.id !== id)
     setList(newList)
   }

   const editItem =(id) => {
     const specificItem = list.find((item) => item.id === id)
     setIsEdit(true)
     setEditId(id)
     setName(specificItem.title)
   }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert = {showAlert} list={list}/>}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            placeholder='e.g eggs'
            onChange={(e) => setName(e.target.value)}
            className='grocery'
          />
          <button type='submit' className='submit-btn'>
            {isEdit ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem ={editItem} />
          <button className='clear-btn' onClick = {clearList}>clear</button>
        </div>
      )}
    </section>
  )
}

export default App
