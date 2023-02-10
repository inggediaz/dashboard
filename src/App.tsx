import './App.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'

import 'primereact/resources/primereact.min.css'

import 'primeicons/primeicons.css'
import Layout from './pages/Layout'

function App (): JSX.Element {
  return (
    <main className='App'>
      <Layout />
    </main>
  )
}

export default App
