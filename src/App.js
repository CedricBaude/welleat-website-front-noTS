import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Public/Home';
import Dashboard from './pages/Admin/Dashboard';
import Appli from './components/public/Appli';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/dromadaire" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
