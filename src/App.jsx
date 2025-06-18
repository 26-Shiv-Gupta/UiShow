import './App.css'
import 'boxicons/css/boxicons.min.css';
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'


function App() {
  
  return (
    <div className='App'>
      <Header />
      <div className='header-gap'></div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
