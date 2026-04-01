import { useState } from 'react'
import { Agentation } from 'agentation'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Current from './components/Current'
import Projects from './components/Projects'
import Experience from './components/Experience'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      {!isLoading && <Navbar />}
      <Hero />
      <Current />
      <Projects />
      <Experience />
      {process.env.NODE_ENV === "development" && (
        <Agentation
          endpoint="http://localhost:4747"
          onSessionCreated={(sessionId) => {
            console.log("Session started:", sessionId);
          }}
        />
      )}
    </>
  )
}

export default App
