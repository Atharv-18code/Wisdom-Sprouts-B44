
import { useContext } from 'react'
import './App.css'
import { context } from './Storage'

function App() {
  const {data} = useContext(context)

  return (
    <>
      <h1>Atharv - {data}</h1>
    </>
  )
}

export default App
