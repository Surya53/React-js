import React, { Component, Fragment } from 'react';
import CompC from './CompC';
class CompB extends Component {
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
                         <p className="h5">Comp B </p>
                         <p>{JSON.stringify(this.props.userInfo)}</p>
                         <CompC userInfo={this.props.userInfo}/>
                      </div>
                  </div>
                 
             </Fragment>
         );
    }
}
 
export default CompB;