import './App.css'
import { Route, Routes } from 'react-router-dom'
import routes from './routes'
import { Suspense } from 'react'

const loading = <div>Loading...</div>

function App() {

  return (
    <div className='flex flex-col'>
      <Suspense fallback={loading}>
        <Routes>
          {
            routes.map((route, i) =>
              <Route key={i} path={route.path} element={route.component} />
            )
          }
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
