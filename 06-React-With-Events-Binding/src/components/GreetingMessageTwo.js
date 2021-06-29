import React from "react";

class GreetingMessageTwo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message : 'Hello'
        }
    }

    // updateMessage
    updateMessage = (value) => {
        this.setState({
            message : value
        });
    };

    render() {
        return (
            <div>
                <div className="card m-4">
                    <div className="card-body">
                        <p className="h3">{this.state.message}</p>
                        <button onClick={this.updateMessage.bind(this , "Good Morning")}  className="btn btn-success btn-sm">Good Morning</button>
                        <button onClick={this.updateMessage.bind(this , "Good Afternoon")} className="btn btn-warning btn-sm">Good Afternoon</button>
                        <button onClick={this.updateMessage.bind(this , "Good Evening")}  className="btn btn-danger btn-sm">Good Evening</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default GreetingMessageTwo;
