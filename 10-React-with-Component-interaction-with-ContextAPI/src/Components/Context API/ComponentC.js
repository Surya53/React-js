import React, { Component, Fragment } from 'react';
import UserContext from './UserContext';

class ComponentC extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
             <Fragment>
                 <div className="card m-4">
                      <div className="card-body bg-danger text-white">
                         <p className="h4">Component C</p>
                           <UserContext.Consumer>
                                 {
                                     (userInfo) => (
                                         <p>{JSON.stringify(userInfo)}</p>
                                     )
                                 }
                           </UserContext.Consumer>
                       </div>
                  </div>
             </Fragment>
         );
    }
}
 
export default ComponentC;