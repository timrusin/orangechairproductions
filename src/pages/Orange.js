import { useState } from 'react'
import './Orange.css'

const Orange = () => {
  const [page, setPage] = useState('about')
  
  return (
  <container className="orange-container">
     <navbar className='sidebar-container'>
        <button className='sidebar-button' onClick={()=>setPage('about')}>About</button>
        <button className='sidebar-button' onClick={()=>setPage('services')}>Services</button>
        <button className='sidebar-button' onClick={()=>setPage('reel')}>Reel</button>
        <button className='sidebar-button' onClick={()=>setPage('contact')}>Contact</button>
    </navbar>
    <about className={page === 'about' ? 'active' : 'hide'}>
      <section className='displayed'>
        <h1>Testing about</h1>
        <p>Sit nisi eiusmod esse aliqua dolore consectetur voluptate aliquip. Qui amet dolor laborum officia laboris quis duis Lorem dolore non. Officia veniam exercitation veniam laborum. Culpa aute culpa nisi proident magna aliquip qui. Labore ea reprehenderit voluptate pariatur ipsum ea ipsum excepteur. Nostrud labore quis aute dolor quis pariatur reprehenderit nostrud incididunt velit Lorem.</p>
        <p>Anim fugiat elit aute ipsum culpa Lorem velit ea tempor exercitation culpa fugiat reprehenderit. In amet voluptate adipisicing occaecat proident voluptate ea sint excepteur. Consequat et consectetur nostrud veniam officia ipsum est nostrud proident Lorem veniam eu.</p>
      </section>
    </about>

    <services className={page === 'services' ? 'active' : 'hide'}>
      <h1>SERVICES</h1>
    </services>

    <reel className={page === 'reel' ? 'active' : 'hide'}>
      <h1>REEL</h1>
    </reel>

    <contact className={page === 'contact' ? 'active' : 'hide'}>
      <h1>CONTACT</h1>
    </contact>
  </container>
  )
}

export default Orange