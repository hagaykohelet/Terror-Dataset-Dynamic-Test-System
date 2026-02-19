import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Datapage from './pages/DataPage'
import TestPage from './pages/testPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Datapage />} />
      <Route path='/testpage' element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
