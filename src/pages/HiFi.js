import { useState } from 'react'
import { Link } from 'react-router-dom'
import './HiFi.css'

const HiFi = () => {
  const [page, setPage] = useState('about')
  
  return (
  <container className="orange-container fade">
    <header className='hifi-header'>
      <h1>
        HI-FI Studios
      </h1>
    </header>

    <navbar className='sidebar-container'>
        <button className={page === 'about' ? 'hifi-sidebar-button-active' : 'hifi-sidebar-button'} onClick={()=>setPage('about')}>About</button>
        <button className={page === 'services' ? 'hifi-sidebar-button-active' : 'hifi-sidebar-button'} onClick={()=>setPage('services')}>Services</button>
        <button className={page === 'reel' ? 'hifi-sidebar-button-active' : 'hifi-sidebar-button'} onClick={()=>setPage('reel')}>Reel</button>
        <button className={page === 'contact' ? 'hifi-sidebar-button-active' : 'hifi-sidebar-button'} onClick={()=>setPage('contact')}>Contact</button>
          <container className="link-button-container">
            <Link to='/lofi'><button className='link-button lofi'>Lo-Fi Productions</button></Link>
            <Link to='/orangechair'><button className='link-button orangechair'>Orange Chair Productions</button></Link>
          </container>
    </navbar>

    <about className={page === 'about' ? 'active' : 'hide'}>
      <section className='displayed fade'>
        <h1>Testing about</h1>
        <p>Sit nisi eiusmod esse aliqua dolore consectetur voluptate aliquip. Qui amet dolor laborum officia laboris quis duis Lorem dolore non. Officia veniam exercitation veniam laborum. Culpa aute culpa nisi proident magna aliquip qui. Labore ea reprehenderit voluptate pariatur ipsum ea ipsum excepteur. Nostrud labore quis aute dolor quis pariatur reprehenderit nostrud incididunt velit Lorem.</p>
        <p>Anim fugiat elit aute ipsum culpa Lorem velit ea tempor exercitation culpa fugiat reprehenderit. In amet voluptate adipisicing occaecat proident voluptate ea sint excepteur. Consequat et consectetur nostrud veniam officia ipsum est nostrud proident Lorem veniam eu.</p>
      </section>
    </about>

    <services className={page === 'services' ? 'active' : 'hide'}>
      <section className='displayed fade'>
        <h1>Testing Services</h1>
        <p>Sit nisi eiusmod esse aliqua dolore consectetur voluptate aliquip. Qui amet dolor laborum officia laboris quis duis Lorem dolore non. Officia veniam exercitation veniam laborum. Culpa aute culpa nisi proident magna aliquip qui. Labore ea reprehenderit voluptate pariatur ipsum ea ipsum excepteur. Nostrud labore quis aute dolor quis pariatur reprehenderit nostrud incididunt velit Lorem.</p>
        <p>Anim fugiat elit aute ipsum culpa Lorem velit ea tempor exercitation culpa fugiat reprehenderit. In amet voluptate adipisicing occaecat proident voluptate ea sint excepteur. Consequat et consectetur nostrud veniam officia ipsum est nostrud proident Lorem veniam eu.</p>
      </section>
    </services>

    <reel className={page === 'reel' ? 'active' : 'hide'}>
      <section className='displayed fade'>
        <h1>Testing Reel</h1>
        <p>Sit nisi eiusmod esse aliqua dolore consectetur voluptate aliquip. Qui amet dolor laborum officia laboris quis duis Lorem dolore non. Officia veniam exercitation veniam laborum. Culpa aute culpa nisi proident magna aliquip qui. Labore ea reprehenderit voluptate pariatur ipsum ea ipsum excepteur. Nostrud labore quis aute dolor quis pariatur reprehenderit nostrud incididunt velit Lorem.</p>
        <p>Anim fugiat elit aute ipsum culpa Lorem velit ea tempor exercitation culpa fugiat reprehenderit. In amet voluptate adipisicing occaecat proident voluptate ea sint excepteur. Consequat et consectetur nostrud veniam officia ipsum est nostrud proident Lorem veniam eu.</p>
      </section>
    </reel>

    <contact className={page === 'contact' ? 'active' : 'hide'}>
      <section className='displayed fade'>
        <h1>Testing Contact</h1>
        <p>Sit nisi eiusmod esse aliqua dolore consectetur voluptate aliquip. Qui amet dolor laborum officia laboris quis duis Lorem dolore non. Officia veniam exercitation veniam laborum. Culpa aute culpa nisi proident magna aliquip qui. Labore ea reprehenderit voluptate pariatur ipsum ea ipsum excepteur. Nostrud labore quis aute dolor quis pariatur reprehenderit nostrud incididunt velit Lorem.</p>
        <p>Anim fugiat elit aute ipsum culpa Lorem velit ea tempor exercitation culpa fugiat reprehenderit. In amet voluptate adipisicing occaecat proident voluptate ea sint excepteur. Consequat et consectetur nostrud veniam officia ipsum est nostrud proident Lorem veniam eu.</p>
      </section>
    </contact>
  </container>
  )
}

export default HiFi