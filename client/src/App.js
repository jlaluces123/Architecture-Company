import React from 'react';
import './App.css';

// Component Imports
import Navigation from "./components/Navigation/index.js";

function App() {
  return (
    <div className="bg-gray-300">
      <header className="App-header">
        <Navigation />
      </header>

      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  );
}

export default App;
