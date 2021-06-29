import React, { Fragment } from 'react';

class ShowPassword extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              inputType : 'password'
          }
      }

      //update check
      updateCheck = (event) => {
        /* if(this.state.inputType === 'password'){
             this.setState({
                 inputType : 'text'
             })
         }
         else{
            this.setState({
               inputType : 'password'
            });
         }*/
        //  use Ternary part  (condition) ? true : false
        (this.state.inputType === 'password') ? this.setState({
           inputType : 'text'
        }) : this.setState({
           inputType : 'password'
        });
      };


      render() {
          return(
              <Fragment>
                  <div className="container mt-3">
                      <div className="row">
                          <div className="col-md-6"> 
                                <div className="card">
                                   <div className="card-header bg-danger text-white ">
                                        <h4>Show Password</h4>
                                   </div>
                                   <div className="card-body">
                                        <form>
                                        <div class="input-group mb-3 ">
                                          
                                           <div class="input-group-text ml-6">
                                                <input onClick={this.updateCheck} type="checkbox" 
                                                 aria-label="Checkbox for following text input"/>
                                            </div>
                                        
                                              <input type={this.state.inputType} class="form-control" 
                                              aria-label="Text input with checkbox"/>
                                        </div> 
                                         
                                        </form>
                                   </div>
                                </div>
                           </div>
                      </div>
                  </div>
              </Fragment>
          );
      }
}
export default ShowPassword;