import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import Home from './Home'
import DriftTaxi from './DriftTaxi'
import TimeAttack from './TimeAttack'
import ForzaKarting from './ForzaKarting'

function App() {
  return (
    <>
      <nav className='page'>
      <Link className="menu__item" to="/">Главная</Link>
      <Link className="menu__item" to="/drift">Дрифт-такси</Link>
      <Link className="menu__item" to="/timeattack">Time Attack</Link>
      <Link className="menu__item" to="/forza">Forza Karting</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/drift" element={<DriftTaxi />}/>
        <Route path="/timeattack" element={<TimeAttack />}/>
        <Route path="/forza" element={<ForzaKarting />}/>
      </Routes>
    </>
  )
}

export default App
