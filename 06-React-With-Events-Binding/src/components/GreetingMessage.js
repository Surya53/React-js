import React from "react";

class GreetingMessage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message : 'Hello'
        }
    }

    // say Good Morning
    sayGoodMorning = () => {
        this.setState({
            message : "Good Morning"
        });
    };

    // say Good Afternoon
    sayGoodAfternoon = () => {
        this.setState({
            message : "Good Afternoon"
        });
    };

    // say Good Evening
    sayGoodEvening = () => {
        this.setState({
            message : "Good Evening"
        });
    };

    render() {
        return (
            <div>
                <div className="card m-4">
                    <div className="card-body">
                        <p className="h3">{this.state.message}</p>
                        <button onClick={this.sayGoodMorning} className="btn btn-success btn-sm">Good Morning</button>
                        <button onClick={this.sayGoodAfternoon} className="btn btn-warning btn-sm">Good Afternoon</button>
                        <button onClick={this.sayGoodEvening} className="btn btn-danger btn-sm">Good Evening</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default GreetingMessage;
