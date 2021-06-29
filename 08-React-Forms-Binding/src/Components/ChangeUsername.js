import React, { Fragment } from  'react';

class Changeusername extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : ""
        }
    }

     updateUsername = (event) => {
       this.setState({
            username : event.target.value
       });
     };

    render() {
        return(
               <Fragment>
                   <div className="container mt-3 ml-1">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="card">
                                  <div className="card-header bg-success text-white">
                                        <h4>Change User Name</h4>
                                    </div>
                                   <div className="card-body">
                                      <form>
                                          <div className="form-group">
                                             <input 
                                             value={this.state.username}
                                             onChange={this.updateUsername}
                                             type="text" className="form-control" placeholder="UserName" />
                                          </div>
                                      </form>
                                     {/* State date is writing here for validation is it corrrext or not */}
                                     <p className="h3">{this.state.username}</p>
                                    </div>
                              </div>
                          </div>

                      </div>
                   </div>

                </Fragment>
        );
    }
}
export default Changeusername;