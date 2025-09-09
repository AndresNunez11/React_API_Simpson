import { useState } from 'react'
import './App.css'
import { Personaje } from './components/Personaje'
import { OtrosPersonajes } from './components/otrosPersonajes'
import logo from './assets/logo.png'


function App() {
  const [showCharacters, setShowCharacters] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [data, setData] = useState([])

   const dataApi = async () => {
        const api = await fetch('https://thesimpsonsapi.com/api/characters')
        const data = await api.json();
        setData(data.results);
    }

       

  return (
    <>
      <div>
        <header className='App-header'>
          <div>
            <img src={logo} alt="logo"/>
          </div>        
          <h1 className='title'>Characters</h1>
          {
            showMore ? (<OtrosPersonajes setData={setData} setShowMore={setShowMore} setShowCharacters={setShowCharacters} />)
            :
            (<>
          {showCharacters ? (
            dataApi(),
            <Personaje data= {data} setData={setData} setShowCharacters={setShowCharacters} setShowMore={setShowMore}/>
          ) : (
            <button className='btn-search' onClick={() => setShowCharacters(true)}>
              See Characters
            </button>
          )}
          </>)
          }
          <br />
        </header>
      </div>
    </>
  )
}

export default App

