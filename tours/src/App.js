import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const getTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      response.json().then((tours) => {
        setIsLoading(false)
        setTours(tours)
      })
      
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    getTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}
export default App
