import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBtn from './components/TopBtn';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {

  useEffect(() => {
    let sections = document.querySelectorAll('.section');
    let navLinks = document.querySelectorAll('.menu li a');
  
  
    window.onscroll = ()=>{
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
  
        if(top >= offset && top < offset + height){
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
          })
        }
      })
    }

  } , [])

  return (
    <>
      <Router>
        <Navbar/>
        <TopBtn/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}


export default App;
