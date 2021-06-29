import React from 'react';
import './App.css';
import Changeusername from './Components/ChangeUsername';
import ChangeSelectBox from './Components/ChangeSelectBox';
import SMSApplication from './Components/SMSApplication';
import ShowPassword from './Components/ShowPassword';
import LoginForm from './Components/LoginForm';
import Registration from './Components/Registration';
import RegistrationNew from './Components/RegistrationNew';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Froms Binding</a>
        </nav>
        {/* <Changeusername/>  */}
        {/* <ChangeSelectBox/> */}
        {/* <SMSApplication/> */}
         {/* <ShowPassword/> */}
         {/* <LoginForm/> */}
         {/* <Registration/> */}
         <RegistrationNew/>
         


    </div>
  );
}

export default App;
