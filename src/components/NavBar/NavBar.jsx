import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import "./NavBar.css"

export default function NavBar({}) {

  

  return (
    <>
      <div className="navbar">
        <nav className='nav-menu'>

          <ul className='nav-menu-items'>
          {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>


{/* 
      <nav>
        <Link to="/">Louna</Link>
        &nbsp; | &nbsp;
        <Link to="/Collections">Collections</Link>
        &nbsp; | &nbsp;
        <Link to="/About">About</Link>
        &nbsp; | &nbsp;
        <Link to="/Contact">Contact</Link>
        &nbsp; | &nbsp;
        <Link to="/Add">Add</Link>
      </nav> */}
    </>
  );
}