import './styles/css/main.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Error from './page/Error'
import SingleCocktail from './page/SingleCocktail'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <HashRouter>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cocktail/:id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
