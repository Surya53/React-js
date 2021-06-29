import React, { Fragment } from 'react';

class HobbySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eating: false,
            coding: false,
            sleeping: false
        }
    }

    //updateINput function here
    updateInput = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.checked
        });
    };

    render() {
        return (
            <Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Hobby Selector</p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-check">
                                                <input
                                                    name="eating"
                                                    onChange={this.updateInput}
                                                    className="form-check-input" type="checkbox" value=""
                                                    id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Eating
                                                </label>
                                            </div>
                                            {/* 2nd check box */}
                                            <div class="form-check">
                                                <input
                                                    name="coding"
                                                    onChange={this.updateInput}
                                                    class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Coding
                                                </label>
                                            </div>
                                            {/* 3rd Check boxes */}
                                            <div class="form-check">
                                                <input
                                                    name="sleeping"
                                                    onChange={this.updateInput}
                                                    class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Sleeping
                                                </label>
                                            </div>
                                        </div>
                                        {/* Cards  for check boxes*/}
                                        <div className="col-md-8">
                                            {
                                                this.state.eating ?
                                                    <Fragment>
                                                        <div className="card animated jello">
                                                            <div className="card-body bg-success text-white">
                                                                <p className="h4">Eating</p>
                                                                <p>Invidunt sea eirmod et et lorem erat et sanctus est,. </p>
                                                            </div>

                                                        </div>
                                                    </Fragment>
                                                    : null
                                            }

                                            {
                                                this.state.coding ?
                                                    <Fragment>
                                                        <div className="card animated jello">
                                                            <div className="card-body bg-warning text-white">
                                                                <p className="h4">Coding</p>
                                                                <p>Invidunt sea eirmod et et lorem erat et sanctus est,. </p>
                                                            </div>
                                                        </div>
                                                    </Fragment> : null
                                            }

                                            {
                                                this.state.sleeping ?
                                                    <Fragment>
                                                        <div className="card animated jello">
                                                            <div className="card-body bg-danger text-white">
                                                                <p className="h4">Sleeping</p>
                                                                <p>Invidunt sea eirmod et et lorem erat et sanctus est,. </p>
                                                            </div>

                                                        </div>

                                                    </Fragment>
                                                    : null
                                            }

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
export default HobbySelector;