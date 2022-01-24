import React from 'react';
import {cartItems, cartSummary} from '../../_constants/Cart';
import './index.scss';

const Cart = () => {
   return (
      <div className="container-fluid p-0 cart-items">
         <div className="container p-0">
            <h3 className="text-uppercase d-flex align-items-center justify-content-center">Your cart</h3>
            <div className="row m-0 justify-content-center px-md-0 px-3">
               <div className="col-md-8 col-12 p-0">
                  <div className="cart-item">
                     <div className="py-4 d-flex align-items-center justify-content-between">
                        <button className="continue-shopping text-uppercase">continue shopping</button>
                        <div className="d-flex align-items-center">
                           <button className="cart-list me-3 text-capitalize">shopping cart (2)</button>
                           <button className="cart-list text-capitalize">your wishlist (0)</button>
                        </div>
                     </div>
                     {cartItems.map((item) => (
                        <div key={item.id} className="row m-0 inside mb-3 pb-3 align-items-center">
                           <div className="col-md-3 col-sm-12 p-0">
                              <div className="img">
                                 <img src={item.img} alt="" className="h-100 w-100" />
                              </div>
                           </div>
                           <div className="col-md-7 col-sm-12 ps-4">
                              <div className="product-details">
                                 <div className="d-flex align-items-center">
                                    <p className="pe-2 py-2">Product: </p>
                                    <span className="text-uppercase">{item.productName}</span>
                                 </div>
                                 <div className="d-flex align-items-center">
                                    <p className="pe-2 py-2">ID: </p>
                                    <span className="">{item.productId}</span>
                                 </div>
                                 <p className="my-2 selected-color color color1"></p>
                                 <div className="d-flex align-items-center">
                                    <p className="pe-2 py-2">Size: </p>
                                    <span className="text-uppercase">{item.size}</span>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-2 col-sm-12">
                              <div className="qty-price d-flex flex-column align-items-md-center align-items-sm-start">
                                 <div className="mb-3 d-flex align-items-center">
                                    <p className="plus">+</p>
                                    <span className="qty px-3">{item.qty}</span>
                                    <p className="minus">-</p>
                                 </div>
                                 <span className="amount">N {item.amount}</span>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="col-md-4 col-12 p-0">
                  <div className="cart-summary ps-md-5 ps-sm-0">
                     <div className="d-flex align-items-center justify-content-end">
                        <button className="checkout text-uppercase my-3">checkout now</button>
                     </div>
                     <div className="order-summary text-uppercase p-3">
                        <h4 className="pb-1">order summary</h4>
                        <ul className="">
                           {cartSummary.map((item) => (
                              <li key={item.id} className="py-3 d-flex align-items-center justify-content-between">
                                 <p className="text-capitalize">{item.options}</p>
                                 <span className="">N {item.amount}</span>
                              </li>
                           ))}
                        </ul>
                        <button className="checkout-now text-uppercase w-100 my-3">checkout now</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
