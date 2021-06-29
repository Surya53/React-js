import React, { Component, Fragment } from 'react';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            employees : [
               
                {
                    id : 101,
                    name : 'Rajan',
                    age  : 25,
                    designation  : 'Software Enginerring',
                },
                {
                    id : 102,
                    name : 'Kumar',
                    age  : 25,
                    designation  : 'Devops Enginerring',
                },
                {
                    id : 103,
                    name : 'Revanth',
                    age  : 35,
                    designation  : 'Project Manager',
                },
                {
                    id : 104,
                    name : 'Charan',
                    age  : 55,
                    designation  : 'CEO',
                },


            ]
        }
    }
    render() { 
        return (
            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                       <div className="col">
                           <p className="h3">Employee Info</p>
                           <p className="lead"> Consetetur voluptua sed diam sanctus lorem sadipscing kasd stet, ut rebum takimata no sadipscing, eirmod amet kasd labore tempor et eirmod ipsum et. Invidunt gubergren aliquyam dolores diam stet magna. </p>
                       </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-striped table-light">
                               <thead className="bg-dark text-white">
                                   <tr>
                                       <th>Employee Id</th>
                                       <th>NAME </th>
                                       <th>AGE </th>
                                       <th>Signature</th>
                                   </tr>
                               </thead>
                               <tbody>
                                    {
                                        // loop it for so much data
                                        this.state.employees.map((employee) => {
                                            return (
                                                <tr>
                                                    <td>{employee.id}</td>
                                                    <td>{employee.name}</td>
                                                    <td>{employee.age}</td>
                                                    <td>{employee.designation}</td>

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
 
export default EmployeeList;