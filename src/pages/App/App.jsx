import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Mens from '../Mens/Mens';
import Womens from '../Womens/Womens';

import './App.css';


export default function App() {


  return (
    <main className="App">
        <>
          <NavBar />
          <Routes>
              <Route path="/Mens" element={<Mens />} />
              <Route path="/Womens" element={<Womens />} />
            
            
          </Routes>



        </>
        


      
    </main>
  );
}
