import React from "react";

class ProductItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product : {
                sno : 101,
                image : 'https://images-na.ssl-images-amazon.com/images/I/81%2Bd6eSA0eL._UL1500_.jpg',
                name : 'Samsung Watch',
                qty : 2,
                price : 550
            }
        }
    }

    decrQty = () => {
        this.setState({
            product : {
                ...this.state.product,
                qty  : (this.state.product.qty - 1  > 0 ) ? this.state.product.qty -1 : 1 
            }
        });
    };

    incrQty = () => {
        
       this.setState({
          product : {
              ...this.state.product,
            qty : this.state.product.qty + 1 
        }
      });
    };

    render() {
        return (
            <div>
               {/* <pre>{JSON.stringify(this.state)}</pre>*/}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-light table-striped text-center">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Product Image</th>
                                        <th>Product NAME</th>
                                        <th>Product Qty</th>
                                        <th>Product Price</th>
                                        <th>Product Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.product.sno}</td>
                                        <td>
                                            <img src={this.state.product.image} width="50" height="50"/>
                                        </td>
                                        <td>{this.state.product.name}</td>
                                        <td>
                                            <i onClick={this.decrQty} className="fa fa-minus-circle mx-2"></i>
                                            {this.state.product.qty}
                                            <i onClick={this.incrQty} className="fa fa-plus-circle mx-2"></i>
                                            </td>
                                        <td>{this.state.product.price}</td>
                                        <td>{this.state.product.qty * this.state.product.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default ProductItem;
