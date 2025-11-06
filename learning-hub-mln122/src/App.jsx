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
        <Route path="/MLN122" element={<Home />} />
        <Route path="/MLN122/learn" element={<Learn />} />
        <Route path="/MLN122/videos" element={<Videos />} />
        <Route path="/MLN122/quiz" element={<Quiz />} />
        <Route path="/MLN122/socials" element={<Socials />} />
      </Routes>
    </div>
  )
}

export default App
