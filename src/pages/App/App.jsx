import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Collections from '../Collections/Collections';
import SingleCollection from '../SingleCollection/SingleCollection';
import ItemDetails from '../ItemDetails/ItemDetails';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Add from '../Add/Add';
import Home from '../Home/Home';
import './newApp.css';


export default function App() {



  return (
    <main className="App">
        <>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Collections" element={<Collections />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Add" element={<Add />} />
              <Route path="/Collections/:collection" element={<SingleCollection />} />
              <Route path="/Collections/:collection/:item" element={<ItemDetails />} />

            
          </Routes>



        </>
        


      
    </main>
  );
}
