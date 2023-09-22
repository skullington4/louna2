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
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import './newApp.css';
import user from '../../../models/user';


export default function App() {

  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
        {!user ?
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
          </Routes>
          </div>
          </>
        :
        <Route path="/Add" element={<Add />} />

        }      
    </main>
  );
}
