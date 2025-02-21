// import { useState } from 'react'
import Main from './components/Main'
import Languages from "./data/languages"

function App() {
  // const [count, setCount] = useState(0)

  const languages = Languages

  return (
    <>
      <div className='bg-light'>
        <h1>Learn Web Development</h1>
      </div>
      <Main languages={languages} />
    </>
  )
}

export default App
