import React, { Component, Fragment } from 'react';

class HobbySelectorRadio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobby: " "
        }
    }
    //updateInput 
    updateInput = (event) => {
        this.setState({
            ...this.state,
            hobby: event.target.value
        });
    }


    render() {
        let { hobby } = this.state;
        return (
            <Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Hobby Selector Radio </p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="form-check">
                                                <input
                                                    onChange={this.updateInput}
                                                    class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="eating" />
                                                <label class="form-check-label" for="exampleRadios1">
                                                    Eating
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    onChange={this.updateInput}
                                                    class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="coding" />
                                                <label class="form-check-label" for="exampleRadios2">
                                                    Coding
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    onChange={this.updateInput}
                                                    class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="sleeping" />
                                                <label class="form-check-label" for="exampleRadios3">
                                                    Sleeping
                                                </label>
                                            </div>


                                        </div>

                                        <div className="col-md-8">
                                            {
                                                hobby === 'eating' ?
                                                    <Fragment>
                                                        <div className="card animated jello">
                                                            <div className="card-body bg-success text-white">
                                                                <p className="h4">Eating</p>
                                                                <p> Diam dolor clita ipsum nonumy et ea accusam et ipsum.</p>
                                                            </div>
                                                        </div>
                                                    </Fragment> : null
                                            }

                                            {
                                                hobby === 'coding' ?
                                                    <Fragment>
                                                        <div className="card animated jello">
                                                            <div className="card-body bg-warning text-white">
                                                                <p className="h4">Coding</p>
                                                                <p> Diam dolor clita ipsum nonumy et ea accusam et ipsum.</p>
                                                            </div>
                                                        </div>
                                                    </Fragment> : null
                                            }

                                            {
                                                hobby === 'sleeping' ?
                                                    <Fragment>
                                                        {/* 3r card */}
                                                        <div className="card animated jellos">
                                                            <div className="card-body bg-danger text-white">
                                                                <p className="h4">Coding</p>
                                                                <p> Diam dolor clita ipsum nonumy et ea accusam et ipsum.</p>
                                                            </div>
                                                        </div>
                                                    </Fragment> : null
                                            }


                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </Fragment >
        );
    }
}

export default HobbySelectorRadio;