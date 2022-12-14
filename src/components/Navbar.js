import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [click, setClick] = useState(false)
  console.log(click);
  return (
    <nav className='navbar'>
      <div className={click? 'menu-icon menu-icon-180' : 'menu-icon'} onClick={()=>setClick(!click)}>
        <i class="fa-solid fa-arrow-down-long" />
      </div>
        <div className='title' onClick={()=>setClick(!click)}>
            <img
            src="/img/cropped-orangechair-cleaned-edge-logo-2020-3-1.png" 
            alt="orange chair productions logo" 
            className='logo'/>
            <h1 className="main-title">Orange Chair Productions</h1>
            <h4 className="sub-title">A Boutique Production Company Offering A La Carte or Complete Service for the Film & Video World</h4>
        </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <Link to='/orangechair' onClick={()=>setClick(!click)}><li className="nav-list-item color-yellow">Orange Chair Productions</li></Link>
              <Link to='lofi' onClick={()=>setClick(!click)}><li className="nav-list-item color-magenta">Lo-Fi Productions</li></Link>
              <Link to='hifi' onClick={()=>setClick(!click)}><li className="nav-list-item color-aqua">Hi-Fi Studios</li></Link>
            </ul>
    </nav>
  );
}

export default Navbar