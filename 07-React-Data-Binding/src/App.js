import React from 'react';
import './App.css';
import Changeusername from './Components/ChangeUsername';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Froms Binding</a>
        </nav>
         
         <Changeusername/>
        
    </div>
  );
}

export default App;
