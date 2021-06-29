import React from 'react';
import { Fragment } from 'react-is';

class UserMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message : ' ',
            isLoggedIn :false
        }
    }
 
    login = () => {
        this.setState({
            ...this.state,
         isLoggedIn : true,
         message :  'Welcome user'
        });
    };

    logout = () => {
        this.setState({
            ...this.state,
            isLoggedIn : false,
            message : 'Thank You User'
        });
    };
    
    render() {
        return (
            <Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    {/* <p className="h2">{this.state.message}</p> */}
                                     {/* <button  onClick={this.login} className="btn btn-success btn-sm">LogIn</button>
                                     <button  onClick={this.logout} className="btn btn-warning btn-sm">Logout</button> */}
   
                                    {/* Condtional operator */}
                                     {
                                         !this.state.isLoggedIn &&
                                         <button onClick={this.login} className="btn btn-success btn-sm">Login </button>
                                     }
                                     {
                                         this.state.isLoggedIn &&
                                         <button onClick={this.logout} className="btn btn-warning btn-sm">Logout</button>
                        
                                     }
                                     
                                     <p className="h3">{this.state.message}</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </Fragment>
            );
    }
}
export default UserMessage;