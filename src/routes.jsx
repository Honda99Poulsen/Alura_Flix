
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import NuevoVideo from './pages/NuevoVideo/NuevoVideo'
import NotFound from './pages/NotFound'

function AppRoutes() {
  

  return (
    
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='nuevovideo' element={<NuevoVideo/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  
  )
}

export default AppRoutes
