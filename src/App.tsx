import './App.css'
import { Route, Routes } from 'react-router-dom'
import routes from './routes'

function App() {

  console.log(routes)

  return (
    <Routes>
      {
        routes.map((route, i) =>
          <Route key={i} path={route.path} element={route.component} />
        )
      }
    </Routes>
  )
}

export default App
