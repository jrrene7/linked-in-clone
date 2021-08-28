import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <h1> LinkedIn Clone</h1>
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>

      
    </div>
  );
}

export default App;
