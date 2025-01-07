
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Explore from './components/Explore'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    
    <>
         <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    </>
  )
}

export default App