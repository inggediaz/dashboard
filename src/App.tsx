import './App.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'

import 'primereact/resources/primereact.min.css'

import 'primeicons/primeicons.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import ExampleApp from './pages/example-app/ExampleApp'

function App (): JSX.Element {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Layout />}>
          <Route path='app' element={<ExampleApp />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
