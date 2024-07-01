import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'; 
import MainContent from './components/MainContent'; 
import AirportDetails from './components/AirportDetails';

function App() {
  return (
    <Router>
      <div className="App flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden mt-16">
          <Sidebar />
          <div className="flex-1 overflow-auto ">
            <Routes>
              <Route path="/MainContent" element={<MainContent />} />
              <Route path="/airport/:code" element={<AirportDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;