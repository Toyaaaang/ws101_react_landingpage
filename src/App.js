import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Courses from './components/courses';
import Html from './components/html';
import Css from './components/css';
import Js from './components/js';
import Contact from './components/contact';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
      <Router>
        <Nav/>
        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Js' element={<Js/>}/>
          <Route path='Css' element={<Css/>}/>
          <Route path='Html' element={<Html/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='Courses' element={<Courses/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
      

  );
}
export default App;
