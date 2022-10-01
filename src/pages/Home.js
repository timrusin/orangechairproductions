import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <container className='home-container'>
        <div className='triangle-services'>
            <Link path=""><div className='circle yellow'>Orange Chair Productions</div></Link>
            <Link path=""><div className='circle magenta'>Lo-Fi Productions</div></Link>
            <Link path=""><div className='circle aqua'>Hi-Fi Studios</div></Link>
        </div>
    </container>
  )
}

export default Home