import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Collections from '../Collections/Collections';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Add from '../Add/Add';
import './App.css';


export default function App() {



  return (
    <main className="App">
        <>
          <NavBar />
          <Routes>
              <Route path="/Collections" element={<Collections />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Add" element={<Add />} />
            
            
          </Routes>



        </>
        


      
    </main>
  );
}
