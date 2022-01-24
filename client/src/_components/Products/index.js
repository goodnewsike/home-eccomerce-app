import React from 'react';
import {FaRegPlusSquare, FaCartPlus} from 'react-icons/fa';
import {Link, matchPath, useLocation} from 'react-router-dom';
import './index.scss';

const Product = (props) => {
   const {price, productImage} = props;
   return (
      <div className="col-md-3 p-2 mb-4 product">
         <div className="contents position-relative">
            <div className="img h-100">
               <img src={productImage} alt="" className="h-100 w-100" />
            </div>
            <Link to="/product-info/:id" className="overlay position-absolute">
               <div className="inner px-4 h-100 position-relative">
                  <div className="add-to-list position-absolute">
                     <FaRegPlusSquare className="icon" />
                  </div>
                  <p className="price position-absolute">
                     N <span className="">{price}</span>
                  </p>
                  <div className="cart position-absolute">
                     <FaCartPlus className="icon" />
                  </div>
               </div>
            </Link>
         </div>
      </div>
   );
};

const Products = (props) => {
   const {data} = props;
   const {pathname} = useLocation();
   const hideViewAllProductLink = matchPath(pathname, '/furniture')?.isExact;

   return (
      <div className="container p-0 py-4 products d-flex flex-column align-items-center justify-content-center">
         <div className="row m-0">
            {data.map((item) => (
               <Product key={item.id} {...item} />
            ))}
         </div>
         {!!hideViewAllProductLink && (
            <Link to="/all-products" className="text-capitalize view-all">
               view all
            </Link>
         )}
      </div>
   );
};

export default Products;
