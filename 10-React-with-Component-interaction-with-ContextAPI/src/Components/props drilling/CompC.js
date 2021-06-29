import React, { Component, Fragment } from 'react';

class CompC extends Component {
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
                         <p className="h5">Comp C</p>
                          <span>{JSON.stringify(this.props.userInfo)}</span>
                      </div>
                  </div>
             </Fragment>
         );
    }
}
 
export default CompC;