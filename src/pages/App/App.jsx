import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Collections from '../Collections/Collections';
import SingleCollection from '../SingleCollection/SingleCollection';
import ItemDetails from '../ItemDetails/ItemDetails';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Add from '../Add/Add';
import Home from '../Home/Home';
import AuthPage from '../AuthPage/AuthPage';
import './newApp.css';
import { RequireAuth } from 'react-auth-kit';

export default function App() {

  const [user, setUser] = useState(null);


  return (
    <main className="App">
       <>
            <div className="navbarcol">
            <NavBar />
          </div>
          <div className="rest">
          
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Collections" element={<Collections />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Collections/:collection" element={<SingleCollection />} />
              <Route path="/Collections/:collection/:item" element={<ItemDetails />} />
              
              <Route path="/Add" element={
                  <Add user={user}/>
              } />
              <Route path="/login" element={<AuthPage setUser={setUser} />} />
          </Routes>
          </div>
         
        
        </>

             
    </main>
  );
}
