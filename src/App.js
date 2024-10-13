import React from 'react';
import AppRoutes from './routes';  // Import the routes you set up
import './App.css';
         // Import the global styles if any

function App() {
  return (
    <div className="App">
      <AppRoutes />  {/* This will display the routes */}
    </div>
  );
}

export default App;
