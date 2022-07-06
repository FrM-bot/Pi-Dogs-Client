import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './routes'
import Dogs from './routes/dogs'
import DogDetails from './routes/dogDetails'
import AddDog from './routes/addDog'
import { useState } from 'react'
import MenuMovile from './compenents/menu'
import Header from './compenents/header'
import Footer from './compenents/footer'
import About from './routes/about'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const openMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="App container">
      <Header openMenu={openMenu} showMenu={showMenu}/>
      {
        showMenu && <>
          <MenuMovile onClose={() => setShowMenu(false)} />
        </>
      }

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/dogs' element={<Dogs />} />
        <Route path='/dog/:id' element={<DogDetails />} />
        <Route path='/dog/add' element={<AddDog />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
