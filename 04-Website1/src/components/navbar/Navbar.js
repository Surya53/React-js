import React,{Fragment} from 'react';

class Navbar extends React.Component {
    render() {
        return(
            <Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                   <a href="/" className="navbar-brand">Ultimate Vacations</a>
                </nav>
             </Fragment>
        );
    }
}
export default Navbar;