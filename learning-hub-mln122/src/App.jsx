import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Videos from './pages/Videos'
import Quiz from './pages/Quiz'
import Socials from './pages/Socials'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </div>
  )
}

export default App
