import classNames from 'classnames';
import React, {useCallback} from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {navLists} from '../../_constants/Navbar';
import {useAuth, useLocationCode} from '../../_helpers/useLocationCode';
// import UseScrollDirection from '../../_helpers/useScrollDirection';
import './index.scss';

const Navbar = () => {
   const code = useLocationCode();
   // const auth = useAuth();

   const activeRoute = useCallback(
      (num) => {
         return code === num;
      },
      [code],
   );
   console.log('locationCode: ', code);
   // const scrollDirection = UseScrollDirection('down');
   // const styles = {
   //    active: {
   //       visibility: 'visible',
   //       transition: 'all 0.5s',
   //       // background: 'rgba(0, 0, 0, 0.5)',
   //    },
   //    hidden: {
   //       visibility: 'hidden',
   //       transition: 'all 0.5s',
   //       transform: 'translateY(-100%)',
   //    },
   // };

   return (
      <div className="container-fluid p-0 __navbar">
         <div className="__contents d-flex align-items-center">
            <div className="container p-0 h-100 d-flex align-items-center justify-content-between">
               {/* <ul className="d-flex h-100">
                  {navLists.map((item) => (
                     <li key={item.id}>
                        <Link
                           to={item.link}
                           onClick={() => {}}
                           className={classNames('text-capitalize px-3 h-100 d-flex align-items-center', {
                              active: activeRoute(item.link),
                           })}>
                           {item.listItem}
                        </Link>
                     </li>
                  ))}
               </ul> */}
               <div className="contact-us text-capitalize">contact us</div>
               <Link to="/furniture" className="logo text-capitalize">
                  realty app
               </Link>
               <div className="auth-btn d-flex align-items-center">
                  <button className="me-2">
                     <Link to="/login" className="login text-capitalize">
                        login
                     </Link>
                  </button>
                  <button className="me-2">
                     <Link to="/signup" className="signup text-capitalize">
                        sign up
                     </Link>
                  </button>
                  <Link to="/cart" className="cart position-relative">
                     <div className="quantity-in-cart position-absolute d-flex align-items-center justify-content-center">3</div>
                     <FaShoppingCart className="icon me-3" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;

//  style={scrollDirection === 'up' ? styles.active : styles.hidden}
