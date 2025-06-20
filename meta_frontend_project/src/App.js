import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <header><Nav/></header>
      <main><Homepage/></main>
      <footer><Footer/></footer>
    </div>
     
   
  );
}

export default App;
