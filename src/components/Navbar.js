import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className='navbar'>
        <div className='title'>
          <Link className="title-link" to="/">
            <img
            src="/img/cropped-orangechair-cleaned-edge-logo-2020-3-1.png" 
            alt="orange chair productions logo" 
            className='logo'/>
            <h1 className="main-title">Orange Chair Productions</h1>
            <h4 className="sub-title">A Boutique Production Company Offering A La Carte or Complete Service for the Film & Video World</h4>
          </Link>
        </div>
    </nav>
  );
}

export default Navbar