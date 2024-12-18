import './App.css';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/home' element={<HomePage/>} />
      </Routes>
    </Router>
  )
}

export default App
