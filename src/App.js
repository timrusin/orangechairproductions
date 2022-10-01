import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Orange from './pages/Orange';
import LoFi from './pages/LoFi';
import HiFi from './pages/HiFi';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/orangechair" element= {<Orange/>}/>
        <Route path="/lofi" element={<LoFi/>}/>
        <Route path="/hifi" element={<HiFi/>}/>
      </Routes>
    </div>
  );
}

export default App;
