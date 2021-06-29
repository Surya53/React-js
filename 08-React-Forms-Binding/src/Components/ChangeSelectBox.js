import React, { Fragment } from 'react';

class ChangeSelectBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            option : ''
        }
    }

    //updateOption
    updateOption = (event) => {
        this.setState({
           option : event.target.value 
        });
    };

    render() {
        return (
           <Fragment>
               <div className="container mt-3 ">
                   <div className="row">
                       <div className="col-md-6">
                           <div className="card">
                              <div className="card-header bg-primary text-white ">
                                  <p className="h4">Change Select Box</p>
                              </div>
                              <div className="card-body">
                                   <div className="row">
                                       {/* 1st cloumn */}
                                        <div className="col"> 
                                            <form>
                                                <div className="form-group">
                                                      <select className="form-control" onChange={this.updateOption}>
                                                          <option value="">Select an Option</option>
                                                          <option value="React Js">React Js</option>
                                                          <option value="Angular">Angular</option>
                                                          <option value="Vue js">Vue Js</option>
                                                          <option value="Ionic">Ionic</option>

                                                      </select>
                                                </div>
                                            </form> 
                                        </div>
                                        {/* 2nd column */}
                                        <div className="col">
                                             <p className="h4">{this.state.option}</p>
                                        </div>
                                   </div>
                              </div>
                           </div>

                       </div>

                   </div>

               </div>
           </Fragment>
        );
    }
}
export default ChangeSelectBox;
