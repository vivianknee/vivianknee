import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import Creative from './components/Creative'
import Projects from './components/Projects'
import Experience from './components/Experience'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <Hero />
      <Creative />
      <Projects />
      <Experience />
    </>
  )
}

export default App
