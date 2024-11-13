import './App.css';
import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link, Outlet } from 'react-router-dom';
import './components/style/Navbar.css';

function App() {
  return (
      <div className="App container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                  <Link className="navbar-brand" to="/Dashboard">SA Expiations Database</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                          <Link className="nav-link" to="/Dashboard">Dashboard</Link>
                          <Link className="nav-link" to="/Report">Report</Link>
                          <Link className="nav-link" to="/Login">Log out</Link>
                      </div>
                  </div>
            </div>
        </nav>
        <Outlet />
      </div>
  );
}

export default App;
