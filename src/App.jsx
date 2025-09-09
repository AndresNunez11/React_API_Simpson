import { useState, useEffect } from 'react'
import './App.css'
import { Personaje } from './components/Personaje'
import { OtrosPersonajes } from './components/otrosPersonajes'
import logo from './assets/logo.png'

function App() {
  const [showCharacters, setShowCharacters] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [data, setData] = useState([])

  // Llamada a la API cuando se active showCharacters
  useEffect(() => {
    if (showCharacters) {
      const fetchData = async () => {
        try {
          const api = await fetch('https://thesimpsonsapi.com/api/characters')
          const json = await api.json()
          console.log("API data:", json)
          setData(json.results || json) // usa results si existe
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }
      fetchData()
    }
  }, [showCharacters])

  return (
    <div>
      <header className='App-header'>
        <div>
          <img src={logo} alt="logo" />
        </div>        
        <h1 className='title'>Characters</h1>

        {showMore ? (
          <OtrosPersonajes 
            setData={setData} 
            setShowMore={setShowMore} 
            setShowCharacters={setShowCharacters} 
          />
        ) : (
          <>
            {showCharacters ? (
              <Personaje 
                data={data} 
                setData={setData} 
                setShowCharacters={setShowCharacters} 
                setShowMore={setShowMore} 
              />
            ) : (
              <button 
                className='btn-search' 
                onClick={() => setShowCharacters(true)}
              >
                See Characters
              </button>
            )}
          </>
        )}
        <br />
      </header>
    </div>
  )
}

export default App


