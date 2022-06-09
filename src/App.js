import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className='container--element'>
      <Header />
      <Buttons />
      <MainContent />
      <Footer />
      
    </div>
  )
}

export default App;
