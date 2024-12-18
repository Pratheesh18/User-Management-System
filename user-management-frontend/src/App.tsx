
import './App.css';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>} />
      </Routes>
    </Router>
  )
}

export default App
