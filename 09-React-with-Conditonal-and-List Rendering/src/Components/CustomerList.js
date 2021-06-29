import React, { Component, Fragment } from 'react';
import { customerList } from './customerStore';

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             customers : customerList
         }
    }
    render() { 
        return (  
            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className ="h3 text-success">CUSTOMERS INFORMATION</p>
                            <p className="lead">Sanctus diam Est aliquyam gubergren sed elitr est no magna sanctus sea. Diam labore erat aliquyam ipsum consetetur. Diam voluptua clita sed.vero aliquyam sit no dolore stet sed ipsum gubergren. Duo dolor invidunt at invidunt dolor. Diam consetetur amet.</p>
                        </div>
                    </div>
                    <div className="row">
                       <div className="col">
                           <table className="table table-hover text-center table-striped table-success">
                              <thead className="bg-success text-white">
                                  <tr>
                                      <th>ID</th>
                                      <th>IMAGE</th>
                                      <th>NAME</th>
                                      <th>AGE</th>
                                      <th>GENDER</th>
                                      <th>EMAIL</th>
                                      <th>LOCATION</th>

                                  </tr>
                              </thead>
                              <tbody>
                                  {
                                      this.state.customers.map( (customer) => {
                                          return (
                                              <tr>
                                                  <td>{customer.login.uuid.substr(customer.login.uuid.length- 5)}</td>
                                                   <td>
                                                       <img src={customer.picture.large} width="70" height="70" className="simg-thumbnail" />
                                                   </td>
                                                   <td>{customer.name.first} {customer.name.last}</td>
                                                   <td>{customer.dob.age} Yrs.</td>
                                                   <td>{customer.gender.toUpperCase()}</td>
                                                   <td>{customer.email}</td>
                                                   <td>{customer.location.city}</td>
                                              </tr>
                                          )
                                      })
                                  }
                              </tbody>
                           </table>
                       </div>
                    </div>
                </div>
            </Fragment>
            );
    }
}
 
export default CustomerList;