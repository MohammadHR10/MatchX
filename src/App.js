import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile'; // Adjust the path as per your project structure
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* The "element" prop is used instead of "component" */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
