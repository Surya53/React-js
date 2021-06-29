import React from "react";

class WishMessage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message : 'Hello'
        };
    }

    updateMessage = () => {
       console.log('Iam from update Message');
       this.setState({
           message : 'Good Morning'
       });
    };

    sayGoodAfternoon = (value) => {
        this.setState({
            message : value
        });
    };

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.updateMessage} className="btn btn-success btn-sm">Good Morning</button>
                <button onClick={this.sayGoodAfternoon.bind(this , 'Good Afternoon')} className="btn btn-warning btn-sm">Good Afternoon</button>
            </div>
        );
    }
}
export default WishMessage;
