import './App.css';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";
import Credits from './components/Credits/Credits';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  return (
    <div data-theme={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Helmet>
        <title>Portfolio - Cuong Vo Ngoc</title>
        <meta name="description" content="Personal Portfolio of Cuong Vo Ngoc, a React Frontend Developer." />
      </Helmet>
      <Sidebar></Sidebar>
      <main className="main">
        <Home toggleTheme={toggleTheme}></Home>
        <About></About>
        <Experience></Experience>
        <Services></Services>
        <Skill></Skill>
        <Contact></Contact>
      </main>
      <footer className='footer'>
        <Credits></Credits>
      </footer>
    </div>
  );
}

export default App;
