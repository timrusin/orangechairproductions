import { useState } from 'react'
import './HiFi.css'

const Orange = () => {
  const [page, setPage] = useState('about')
  
  return (
  <container className="orange-container">
     <navbar className='sidebar-container'>
        <button className='hifi-sidebar-button' onClick={()=>setPage('about')}>About</button>
        <button className='hifi-sidebar-button' onClick={()=>setPage('services')}>Services</button>
        <button className='hifi-sidebar-button' onClick={()=>setPage('reel')}>Reel</button>
        <button className='hifi-sidebar-button' onClick={()=>setPage('contact')}>Contact</button>
    </navbar>
    <about className={page === 'about' ? 'about' : 'hide'}>
      <h1>ABOUT</h1>
      
    </about>
    <services className={page === 'services' ? 'services' : 'hide'}>
      <h1>SERVICES</h1>
    </services>
    <reel className={page === 'reel' ? 'reel' : 'hide'}>
      <h1>REEL</h1>
    </reel>
    <contact className={page === 'contact' ? 'contact' : 'hide'}>
      <h1>CONTACT</h1>
    </contact>
  </container>
  )
}

export default Orange