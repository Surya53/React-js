import React from 'react';
import './App.css';
import UserMessage from './Components/UserMessage';
import HobbySelector from './Components/HobbySelector';
import HobbySelectorRadio from './Components/HobbySelectorRadio';
import EmployeeList from './Components/EmployeeList';
import CustomerList from './Components/CustomerList';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Conditional And List Rendering</a>
        </nav>
       
       {/* <UserMessage/> */}
       {/* <HobbySelector/> */}
       {/* <HobbySelectorRadio/> */}
       {/* <EmployeeList/> */}
        <CustomerList/>

    </div>
  );
}

export default App;
