import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className='container--element'>
      <Header />
      <Buttons />
      <MainContent />
      
    </div>
  )
}

export default App;
