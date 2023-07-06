import { Link } from 'react-router-dom';

export default function NavBar({}) {

  

  return (
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
    </nav>
  );
}