import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout/Layout'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='project' element={<Projects />} />
          <Route path='project/:name' element={<div>Specific Project</div>} />
          <Route path='*' element={<div>Error</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
