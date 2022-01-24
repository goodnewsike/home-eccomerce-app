import React from 'react';
import Products from '../../_components/Products';
import './index.scss';

const AllProducts = () => {
   return (
      <div className="all-products">
         <div className="container p-0 contents">
            <h3 className="title">Furniture</h3>
            <div className="pt-4 d-flex align-items-center justify-content-between">
               <div className="d-flex align-items-center">
                  <h6 className="">Filter Products: </h6>
                  <div className="select-color position-relative">
                     <span className="">Color</span>
                     <ul className="position-absolute">
                        <li className=""></li>
                     </ul>
                  </div>
                  <div className="select-size position-relative">
                     <span className="">Size</span>
                     <ul className="position-absolute">
                        <li className=""></li>
                     </ul>
                  </div>
               </div>
               <div className="d-flex align-items-center">
                  <h6 className="">Sort Products: </h6>
                  <div className="sort-product position-relative">
                     <span className="">Newest</span>
                     <ul className="position-absolute">
                        <li className=""></li>
                     </ul>
                  </div>
               </div>
            </div>
            <Products />
         </div>
      </div>
   );
};

export default AllProducts;
