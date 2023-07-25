
import './App.css'
import Home from './pages/Home'
import Renderdata from './pages/Renderdata'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from './components/Navbar';

const App=()=> {
 

  return (
    <>
        
      <Router>
     
      {/* <Navbar/> */}
        <Routes>
        
          <Route exact path='/' element={<><Home/></>}
          
          />
          <Route  path='/renderdata' element={<><Renderdata/></>}/>
        </Routes>
     
      </Router>
        
    </>
  )
}

export default App
