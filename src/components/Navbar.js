import { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick (!click)
  const closeMenu = () => setClick (false)

  return (

    <nav>
      <div className={click ? "navbar active" : "navbar"}>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-dash menu-dashes-angle1" : "fas fa-dash menu-dashes"}/>
          <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
          <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
        </div>

        <div className='title'>
          <img 
          src="/img/cropped-orangechair-cleaned-edge-logo-2020-3-1.png" 
          alt="orange chair productions logo" 
          className='logo'/>
          <Link to="/"><h1 className="main-title">Orange Chair Productions</h1></Link>
          <h4 className="sub-title">A Boutique Production Company Offering A La Carte or Complete Service for the Film & Video World</h4>
        </div>

        <div className={click ? "nav-menu active" : "nav-menu"}>
          <nav className="nav-links">
            
          </nav>
        </div>
      </div>

    </nav>
  );
}

export default Navbar