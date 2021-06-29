import React from 'react';
import './App.css';
import ClassCard from './components/ClassCard';
import FuncCard from './components/FuncCard';

function App() {
  return ( 
    <div className="App">
        <h2>Welcome To React Js Root Component</h2>
        <ClassCard/>
        <FuncCard/>
    </div>
  );
}

export default App;
