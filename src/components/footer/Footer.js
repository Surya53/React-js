import React , {Fragment} from 'react';

class Footer extends React.Component {
    render() {
        return (
            <Fragment>
                
                   <div className="p-3 bg-dark text-white text-center mt-3">
                       <div className="container">
                           <div className="row">
                               <div className="col">
                                     <h3>Copyright &copy; 2022 , Ultimate Vacations </h3>
                                     <p>All Rights Reserved</p>
                               </div>

                           </div>
                       </div>
                   </div>
                
            </Fragment>
        );
    }
}
export default Footer;