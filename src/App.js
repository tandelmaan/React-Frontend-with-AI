import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Services from './Pages/Services'
import Technology from './Pages/Technology'
import Footer from './Components/Footer';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <div className="content">
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/technology' element={<Technology/>}/>
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
