import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/api/hello')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Modern Web Application</h1>
        <p>{message}</p>
      </header>
    </div>
  )
}

export default App
