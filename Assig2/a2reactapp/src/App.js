import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import Login from './components/Login';

function App() {
  return (
      <div className="App container">
          <div className="bg-light py-1 mb-2">
            <h2 className="text-center">App</h2>
          </div>
          <div className="row justify-content-center">
            <Login />
          </div>
      </div>
  );
}

export default App;
