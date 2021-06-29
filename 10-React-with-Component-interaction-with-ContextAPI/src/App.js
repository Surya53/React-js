import React, { Fragment } from 'react';
import './App.css';
import ComponentA from './Components/Context API/ComponentA';
import UserContext from './Components/Context API/UserContext';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      userInfo : {
          author : 'NAVEEN SAGGAM',
          channel : 'UIBrain Tehnologies'
      }
     };
  }
  render() { 
    return ( 
      <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Component Interaction</a>
        </nav>
       <Fragment>
         <div className="card m-4">
           <div className="card-body bg-success text-white">
             <p className="h5">App Component</p>
              <p>{JSON.stringify(this.state.userInfo)}</p>
              <UserContext.Provider value={this.state.userInfo}>
                      <ComponentA/>
              </UserContext.Provider>
           </div> 
         </div>
       </Fragment>

    </div>
     );
  }
}
 
export default App;
