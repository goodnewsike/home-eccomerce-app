import React, {useCallback, useState} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {navLists} from '../../_constants/Navbar';
import {useLocationCode} from '../../_helpers/useLocationCode';
// import UseScrollDirection from '../../_helpers/useScrollDirection';
import './index.scss';

import {AiOutlineClose} from 'react-icons/ai';
import {FaShoppingCart} from 'react-icons/fa';
import {BiMenuAltRight} from 'react-icons/bi';

const Navbar = () => {
   const code = useLocationCode();
   const [mobileMenu, setMobileMenu] = useState(false);

   const activeRoute = useCallback(
      (num) => {
         return code === num;
      },
      [code],
   );
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
      <div className="container-fluid p-0 __navbar position-relative">
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
               <div className="contact-us text-capitalize order-md-1">contact us</div>
               <Link to="/furniture" className="logo order-md-2 order-1 text-capitalize">
                  realty app
               </Link>
               <div className="auth-btn order-md-3 order-2 d-flex align-items-center">
                  <div className="btns">
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
                  </div>
                  <Link to="/cart" className="cart position-relative">
                     <div className="quantity-in-cart position-absolute d-flex align-items-center justify-content-center">3</div>
                     <FaShoppingCart className="icon me-3" />
                  </Link>
               </div>
               <div onClick={() => setMobileMenu((mobile) => !mobile)} className="burger-menu">
                  {mobileMenu ? <AiOutlineClose className="menu-icon" /> : <BiMenuAltRight className="menu-icon" />}
               </div>
               {mobileMenu && (
                  <div className="mobile-menu p-3 position-absolute">
                     <div className="contents d-flex flex-column">
                        <button className="mb-3">
                           <Link to="/login" className="login text-capitalize">
                              login
                           </Link>
                        </button>
                        <button className="mb-3">
                           <Link to="/signup" className="signup text-capitalize">
                              sign up
                           </Link>
                        </button>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Navbar;

//  style={scrollDirection === 'up' ? styles.active : styles.hidden}
