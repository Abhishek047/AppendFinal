import React from 'react';
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import LandingPage from './components/LandingPage'
import { GlobalProvider, } from './context/GlobalState'
import Footer from './components/Footer'

function App() {


  return (
    <div>
      <GlobalProvider>
      <Header />
        <Hero />
        <LandingPage />
      </GlobalProvider>
      <Footer />
    </div>
  );
}

export default App;
