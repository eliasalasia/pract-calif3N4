import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import HomeContent from './Components/HomeContent';
import DestinationContent from './Components/DestinationContent';
import MoonDest from './Components/MoonDest';
import EuropaDest from './Components/EuropaDest';
import TitanDest from './Components/TitanDest';
import CrewContent from './Components/CrewContent';
import TechnologyContent from './Components/TechnologyContent';
import MarsDest from './Components/MarsDest'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/home" element={<HomeContent />} />
        <Route path="/destination" element={<DestinationContent />} />
        <Route path="/destination/moon" element={<MoonDest />} />
        <Route path="/destination/mars" element={<MarsDest />} />
        <Route path="/destination/europa" element={<EuropaDest />} />
        <Route path="/destination/titan" element={<TitanDest />} />
        <Route path="/crew" element={<CrewContent />} />
        <Route path="/technology" element={<TechnologyContent />} />
      </Routes>
    </Router>
  );
}

export default App;