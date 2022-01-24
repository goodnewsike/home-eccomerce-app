import React from 'react';
import {Link} from 'react-router-dom';
import {footerIcons} from '../../_constants/Footer';
import './index.scss';

const Footer = () => {
   return (
      <div className="container-fluid p-0 __footer">
         <div className="container p-0 py-5 px-md-0 px-3">
            <div className="row m-0">
               <div className="col-lg-3 col-md-6 col-12 p-0">
                  <h3 className="text-uppercase">realty app.</h3>
                  <p className="py-3">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores minima neque dicta reprehenderit. Porro sunt esse adipisci
                     voluptate quaerat dolorem illo, magni et repudiandae, veniam consequuntur, quibusdam numquam tempore quasi.
                  </p>
                  <ul className="social-icons d-flex align-items-center">
                     {footerIcons.map((item) => (
                        <li key={item.id} className="">
                           <Link className="d-block">{item.icon}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-lg-3 col-md-6 col-12">links here...</div>
               <div className="col-lg-3 col-md-6 col-12">links here...</div>
               <div className="col-lg-3 col-md-6 col-12">contact info here...</div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
