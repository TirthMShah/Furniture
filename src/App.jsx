import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './components/Home'
import { Artificial_Flowers } from './components/Artificial_Flowers'
import { Login } from './components/Login';
import { A_Chair } from './components/A_Chair';
import { A_Door } from './components/A_Door';
import { A_Handle } from './components/A_Handle';
import { Bean_Bags } from './components/Bean_Bags';
import { Bed } from './components/Bed';
import { Frames } from './components/Frames';
import { GlassTables } from './components/GlassTables';
import { MetallicChair } from './components/MetallicChair';
import { MetallicHandles } from './components/MetallicHandles';
import { MetallicShelves } from './components/MetallicShelves';
import { MetallicTables } from './components/MetallicTables';
import { Mirrors } from './components/Mirros';
import { Sofa } from './components/Sofa';
import { SofaCumBed } from './components/SofaCumBed';
import { WoodenChair } from './components/WoodenChair';
import { WoodenDoors } from './components/WoodenDoors';
import { WoodenShelves } from './components/WoodenShelves';
import { Wooden_stools } from './components/woodenStool';
import { WoodenTable } from './components/WoodenTable';
// import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artificial-flowers" element={<Artificial_Flowers />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/A-chair' element={<A_Chair/>} />
        <Route path='/A-door' element={<A_Door/>} />
        <Route path='/A-handle' element={<A_Handle/>} />
        <Route path='/Bean-bags' element={<Bean_Bags/>} />
        <Route path='/Bed' element={<Bed/>} />
        <Route path='/Frames' element={<Frames/>} />
        <Route path='/GlassTables' element={<GlassTables/>} />
        <Route path='/Metallic-chair' element={<MetallicChair/>} />
        <Route path='/Metallic-handles' element={<MetallicHandles/>} />
        <Route path='/MetallicShelves' element={<MetallicShelves/>} />
        <Route path='/MetallicTables' element={<MetallicTables/>} />
        <Route path='/Mirrors' element={<Mirrors/>} />
        <Route path='/Sofa' element={<Sofa/>} />
        <Route path='/SofaCumBed' element={<SofaCumBed/>} />
        <Route path='/WoodenChair' element={<WoodenChair/>} />
        <Route path='/WoodenDoors' element={<WoodenDoors/>} />
        <Route path='/WoodenShelves' element={<WoodenShelves/>} />
        <Route path='/Wooden_Stools' element={<Wooden_stools/>} />
        <Route path='/WoodenTable' element={<WoodenTable/>} />
      </Routes>
    </Router>
    // <div>
    //   <Home/>
    // </div>

  )
}

export default App

