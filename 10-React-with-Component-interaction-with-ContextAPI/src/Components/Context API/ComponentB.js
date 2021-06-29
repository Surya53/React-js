import React, { Component, Fragment } from 'react';
import ComponentC from './ComponentC';
import UserContext from './UserContext';
class ComponentB extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
             <Fragment>
                 <div className="card m-4">
                      <div className="card-body bg-warning text-white">
                         <p className="h5">Component B </p>
                            
                            <ComponentC/>
                      </div>
                  </div>
                 
             </Fragment>
         );
    }
}
 
export default ComponentB;