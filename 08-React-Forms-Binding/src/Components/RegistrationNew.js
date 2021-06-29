import React, { Fragment } from 'react' ;

class RegistrationNew extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                username : '',
                email    : '',
                password : ''
            }
        }
    }

    //updateInput 

 /*  updateInput = (event) => {
        this.setState ({
            user : {
                //ES6 Spread operator
                ...this.state.user,
               [event.target.name] : event.target.value
            }
       });
    };
    */
    
    register = (event) => {
        event.preventDefault();
        console.log(this.state.user);
    }
    
    render() {
        let {username,email,password} = this.state.user; 
        return (
            <Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
               <div className="container mt-3">
                   <div className="row">
                       <div className="col-md-4">
                           <div className="card">
                               <div className="card-header bg-secondary text-white">
                                    <p className="h4">Reegister Here</p>
                               </div>
                               <div className="card-body">
                                  <form onSubmit={this.register}>
                                      <div className="form-group">
                                         <input
                                          name = "username"
                                          onChange = {(e) => {
                                              this.setState ({
                                                  user : {
                                                        ...this.state.user,
                                                        'username' : e.target.value
                                                  }
                                              })
                                          }}
                                          value = {username}
                                         type="Username" className="form-control" placeholder="Username"/>
                                      </div>
                                      <div className="form-group">
                                         <input 
                                          name = "email"
                                          onChange={(e) => {
                                              this.setState ({
                                                  user : {
                                                      ...this.state.user,
                                                      'email' : e.target.value
                                                  }  
                                              })
                                          }}
                                          value = {email}
                                         type="email" className="form-control" placeholder="Email"/>
                                      </div>
                                      <div className="form-group">
                                         <input 
                                          name = "password"
                                          onChange = {(e) => {
                                              this.setState ({
                                                   user : {
                                                       ...this.state.user,
                                                       'password' : e.target.value
                                                   }
                                              })
                                          }}
                                          value = {password}
                                         type="password" className="form-control" placeholder="Password"/>
                                      </div>
                                      <div className="form-group">
                                         <input type="submit" value="Register" className="btn btn-secondary btn-sm"/>
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
export default RegistrationNew;