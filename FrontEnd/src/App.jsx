import './App.css'

import {ROUTES} from './Helpers/RoutesPath'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'


function App() {
  

  return (
    <BrowserRouter>
    
    <div className='App'>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
