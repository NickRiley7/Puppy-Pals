import {useState} from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
     console.log(puppyList)
  const [puppies, setPuppies] = useState(puppyList)
  
    
  
    return (
    <>
      { 
   puppies.map((puppy) => {
     return <p key = {puppy.id}>{puppy.name}</p>
   })
}
    </>
  )
}

export default App
