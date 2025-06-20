import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Specials from './components/Specials';



function App() {
  return (
    <Router>
      <header><Nav/></header>
      <main><Homepage/></main>
      <footer><Footer/></footer>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' elemet={<Chicago/>}/>
      <Route path='/menu' element={<Specials/>}/>
      <Route path='/reservation' element={<BookingPage/>}/>
      <Route path='/order-online' element={<CallToAction/>}/>
      </Routes>
    </Router>
     
   
  );
}

export default App;
