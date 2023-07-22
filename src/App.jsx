
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Settings from './components/Settings'
import Questions from './components/Questions'
import NotFound from './components/NotFound'
import { SettingsProvider } from './context/SettingsContext'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Points from './components/Points'
import { PointsProvider } from './context/PointsContext'



function App() {
  return (
    <PointsProvider >
     <SettingsProvider>
      <Router>
        <Header />
        <Points />
        <Routes>
          <Route path='/'  element={<Questions />} />

          <Route  path='/about' element= {<About/>}/>
          <Route  path='/settings' element= {<Settings/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </SettingsProvider>
    </PointsProvider>

   
  )  
}

export default App
