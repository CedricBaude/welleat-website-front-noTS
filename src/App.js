import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Public/Home';
import Appli from './components/public/Appli';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/appli" element={<Appli />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
