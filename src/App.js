
import './App.css';
import Main from './componnets/Main';
import NavBar from './componnets/NavBar';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Login from './componnets/Login';
import Register from './componnets/Register';

function App() {
  return (
    <div className="App">
   
   <Router>
   <NavBar/>
     <Routes>
       <Route path='/' element={ <Main/>}/>
       <Route path='/login' element={ <Login/>}/>
       <Route path='/register' element={ <Register/>}/>
     </Routes>
   </Router>
  
   
    </div>
  );
}

export default App;
