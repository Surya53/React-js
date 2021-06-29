import React, { Component, Fragment } from 'react';
import CompB from './CompB';
class CompA extends Component {
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
                         <p className="h5">Comp A </p>
                         <p>{JSON.stringify(this.props.userInfo)}</p>
                         <CompB  userInfo={this.props.userInfo}/>
                      </div>
                  </div>
             </Fragment>
             
         );
    }
}
 
export default CompA;