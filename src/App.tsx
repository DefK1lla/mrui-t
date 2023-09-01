import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Auth, Tasks } from './pages'

import './App.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='*' element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
