import { useState } from 'react'
import './LoFi.css'

const LoFi = () => {
  const [page, setPage] = useState('about')
  
  return (
  <container className="orange-container">
    <header className='lofi-header'>
      <h1>
        LO-FI PRODUCTIONS
      </h1>
    </header>

    <navbar className='sidebar-container'>
        <button className={page === 'about' ? 'lofi-sidebar-button-active' : 'lofi-sidebar-button'} onClick={()=>setPage('about')}>About</button>
        <button className={page === 'services' ? 'lofi-sidebar-button-active' : 'lofi-sidebar-button'} onClick={()=>setPage('services')}>Services</button>
        <button className={page === 'reel' ? 'lofi-sidebar-button-active' : 'lofi-sidebar-button'} onClick={()=>setPage('reel')}>Reel</button>
        <button className={page === 'contact' ? 'lofi-sidebar-button-active' : 'lofi-sidebar-button'} onClick={()=>setPage('contact')}>Contact</button>
    </navbar>

    <about className={page === 'about' ? 'active' : 'hide'}>
      <section className='displayed'>
        <h1>Testing about</h1>
        <p>Sit nisi eiusmod esse aliqua dolore consectetur voluptate aliquip. Qui amet dolor laborum officia laboris quis duis Lorem dolore non. Officia veniam exercitation veniam laborum. Culpa aute culpa nisi proident magna aliquip qui. Labore ea reprehenderit voluptate pariatur ipsum ea ipsum excepteur. Nostrud labore quis aute dolor quis pariatur reprehenderit nostrud incididunt velit Lorem.</p>
        <p>Anim fugiat elit aute ipsum culpa Lorem velit ea tempor exercitation culpa fugiat reprehenderit. In amet voluptate adipisicing occaecat proident voluptate ea sint excepteur. Consequat et consectetur nostrud veniam officia ipsum est nostrud proident Lorem veniam eu.</p>
      </section>
    </about>

    <services className={page === 'services' ? 'active' : 'hide'}>
      <section className='displayed'>
        <h1>Testing Services</h1>
        <p>Sit nisi eiusmod esse aliqua dolore consectetur voluptate aliquip. Qui amet dolor laborum officia laboris quis duis Lorem dolore non. Officia veniam exercitation veniam laborum. Culpa aute culpa nisi proident magna aliquip qui. Labore ea reprehenderit voluptate pariatur ipsum ea ipsum excepteur. Nostrud labore quis aute dolor quis pariatur reprehenderit nostrud incididunt velit Lorem.</p>
        <p>Anim fugiat elit aute ipsum culpa Lorem velit ea tempor exercitation culpa fugiat reprehenderit. In amet voluptate adipisicing occaecat proident voluptate ea sint excepteur. Consequat et consectetur nostrud veniam officia ipsum est nostrud proident Lorem veniam eu.</p>
      </section>
    </services>

    <reel className={page === 'reel' ? 'active' : 'hide'}>
      <section className='displayed'>
        <h1>Testing Reel</h1>
        <p>Sit nisi eiusmod esse aliqua dolore consectetur voluptate aliquip. Qui amet dolor laborum officia laboris quis duis Lorem dolore non. Officia veniam exercitation veniam laborum. Culpa aute culpa nisi proident magna aliquip qui. Labore ea reprehenderit voluptate pariatur ipsum ea ipsum excepteur. Nostrud labore quis aute dolor quis pariatur reprehenderit nostrud incididunt velit Lorem.</p>
        <p>Anim fugiat elit aute ipsum culpa Lorem velit ea tempor exercitation culpa fugiat reprehenderit. In amet voluptate adipisicing occaecat proident voluptate ea sint excepteur. Consequat et consectetur nostrud veniam officia ipsum est nostrud proident Lorem veniam eu.</p>
      </section>
    </reel>

    <contact className={page === 'contact' ? 'active' : 'hide'}>
      <section className='displayed'>
        <h1>Testing Contact</h1>
        <p>Sit nisi eiusmod esse aliqua dolore consectetur voluptate aliquip. Qui amet dolor laborum officia laboris quis duis Lorem dolore non. Officia veniam exercitation veniam laborum. Culpa aute culpa nisi proident magna aliquip qui. Labore ea reprehenderit voluptate pariatur ipsum ea ipsum excepteur. Nostrud labore quis aute dolor quis pariatur reprehenderit nostrud incididunt velit Lorem.</p>
        <p>Anim fugiat elit aute ipsum culpa Lorem velit ea tempor exercitation culpa fugiat reprehenderit. In amet voluptate adipisicing occaecat proident voluptate ea sint excepteur. Consequat et consectetur nostrud veniam officia ipsum est nostrud proident Lorem veniam eu.</p>
      </section>
    </contact>
  </container>
  )
}

export default LoFi