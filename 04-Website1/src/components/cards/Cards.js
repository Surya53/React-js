import React , {Fragment} from 'react';
import Card1 from '../../assets/img/card-1.jpg';
import Card2 from '../../assets/img/card-2.jpg';
import Card3 from '../../assets/img/card-3.jpg';
import Card4 from '../../assets/img/card-4.jpg';

class Cards extends React.Component {
     render() {
         return (
             <Fragment>
                 <div className="container mt-3">
                     <div className="row">
                         <div className="col-md-3">
                             <div className="card">
                                 <img src= {Card1} alt="" className="img-fluid"/>
                               <div className="card-body">
                                     <h4 className="card-title">Paris</h4>
                                     <p className="card-text">
                                        Lorem labore ipsum tempor sit dolore dolore. Sed dolor dolore no sed et sed sit lorem duo. Diam sed rebum dolor et lorem et. Sadipscing lorem at kasd magna est.Diam dolor vero et et Diam. 
                                     </p>
                                     <button className="btn  btn-dark btn-sm">Book Now</button>
                               </div>
                             </div>
                         </div>
                         {/* 2nd column */}
                         <div className="col-md-3">
                             <div className="card">
                                 <img src= {Card2} alt="" className="img-fluid"/>
                               <div className="card-body">
                                     <h4 className="card-title">Paris</h4>
                                     <p className="card-text">
                                        Lorem labore ipsum tempor sit dolore dolore. Sed dolor dolore no sed et sed sit lorem duo. Diam sed rebum dolor et lorem et. Et et diam.. 
                                     </p>
                                     <button className="btn  btn-dark btn-sm">Book Now</button>
                               </div>
                             </div>
                         </div>
                         {/* 3rd column */}
                         <div className="col-md-3">
                             <div className="card">
                                 <img src= {Card3} alt="" className="img-fluid"/>
                               <div className="card-body">
                                     <h4 className="card-title">Paris</h4>
                                     <p className="card-text">
                                        Lorem labore ipsum tempor sit dolore dolore. Sed dolor dolore no sed et sed sit lorem duo.
                                        Sed dolore accusam stet .
                                     </p>
                                     <button className="btn  btn-dark btn-sm">Book Now</button>
                               </div>
                             </div>
                         </div>
                         {/* 4th column */}
                         <div className="col-md-3">
                             <div className="card">
                                 <img src= {Card4} alt="" className="img-fluid"/>
                               <div className="card-body">
                                     <h4 className="card-title">Paris</h4>
                                     <p className="card-text">
                                        Lorem labore ipsum tempor sit dolore dolore. Sed dolor dolore no sed et sed sit lorem duo. Diam sed rebum dolor et lorem et. Sadipscing lorem . 
                                     </p>
                                     <button className="btn  btn-dark btn-sm">Book Now</button>
                               </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </Fragment>
         );
     }
}
export default Cards;
