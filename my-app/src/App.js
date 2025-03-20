import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import WeddingInvitation from './components/WeddingInvitation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WeddingInvitation />} />
          <Route path="/invitation" element={<WeddingInvitation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
