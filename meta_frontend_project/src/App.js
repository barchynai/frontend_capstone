import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Specials from './components/Specials';
import Chicago from './components/Chicago';
import BookingPage from './components/BookingPage';
import CallToAction from './components/CallToAction';




function App() {
  return (
    <Router>
    <header>
      <Nav/>
    </header>
    <main>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/reservation' element={<BookingPage/>}/>
      <Route path='/about' element={<Chicago/>}/>
      <Route path='/menu' element={<Specials/>}/>
      </Routes>
    </main>  
    <footer>
      <Footer/>
    </footer>
    </Router>
  );
}

export default App;
