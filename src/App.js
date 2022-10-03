import React from 'react'; 
import Crypto from './Components/Crypto';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Homepage from './Components/Homepage';
import Sports from './Components/Sports';
import AllNews from './Components/AllNews';

function App() {
 const newslinks ="https://newsapi.org/v2/everything?q=in&apiKey=db654b740d794427a956fc21e77853a0";
 const headlineslink ="https://newsapi.org/v2/top-headlines?country=in&apiKey=db654b740d794427a956fc21e77853a0";
 const sportslink ="https://newsapi.org/v2/everything?q=sports&apiKey=db654b740d794427a956fc21e77853a0";
  return (
    <>
       <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage headline={"TOP HEADLINES"} newslink={headlineslink}/>}/>
        <Route exact path="/News" element={<AllNews headline={"ALL NEWS"}  newslink={newslinks}/>}/>
        <Route exact path="/Sports" element={<Sports headline={"SPORTS news"}  newslink={sportslink}/>}/>
        <Route exact path="/Crypto" element={<Crypto/>}/>
       
      </Routes>
      
   </>
  );
}

export default App;
