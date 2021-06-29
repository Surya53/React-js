import React, { Component, Fragment } from 'react';
import ComponentB from './ComponentB';

class ComponentA extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
             <Fragment>
                  <div className="card m-4">
                      <div className="card-body bg-primary text-white">
                         <p className="h5">Component A </p>
                         <ComponentB/>
                      </div>
                  </div>
             </Fragment>
             
         );
    }
}
 
export default ComponentA;