import React, {useState} from 'react';
import './index.scss';

import productImage from '../../_assets/images/13.jpg';
import {ReactComponent as DropdownIcon} from '../../_assets/icons/arrow-down2.svg';

const ProductInfo = () => {
   const [sizes, setSizes] = useState(false);
   const [selectedSizes, setSelectedSizes] = useState(0);
   const handleSizes = () => {
      setSizes((sizes) => !sizes);
   };
   const sizeOptions = [
      {label: 'Single', val: 0},
      {label: 'Double', val: 1},
      {label: 'Three in one', val: 2},
   ];
   return (
      <>
         <div className="container-fluid p-0 products-info">
            <div className="container p-0">
               <div className="row m-0 align-items-center">
                  <div className="col-md-6 col-12 p-0">
                     <div className="img px-2">
                        <img src={productImage} alt="" className="h-100 w-100" />
                     </div>
                  </div>
                  <div className="col-md-6 col-12 p-0">
                     <div className="info px-md-5 px-3 py-md-0 py-3">
                        <h3 className="text-capitalize">Default Title</h3>
                        <p className="py-4">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus amet, voluptatum eveniet consequuntur
                           earum deserunt nam, nulla, repellendus nobis corrupti officiis ipsum. Inventore aperiam in atque unde. Ipsam, fugit.
                        </p>
                        <span className="price">N 200,000</span>
                        <div className="d-flex align-items-center pt-3">
                           <span className="me-2 text-capitalize">Color: </span>
                           <div className="d-flex align-items-center">
                              <span className="color color1 me-2"></span>
                              <span className="color color2 me-2"></span>
                              <span className="color color3 me-2"></span>
                           </div>
                           <div onClick={handleSizes} className="sizes-dropdown d-flex align-items-center ms-5 position-relative">
                              <span className="d-block">{sizeOptions[selectedSizes].label}</span>
                              <DropdownIcon className="ms-4 icon" />
                              {sizes && (
                                 <ul className="drop w-100 position-absolute">
                                    {sizeOptions
                                       .filter((i) => i.val !== 0)
                                       .map((i, n) => (
                                          <li
                                             key={n}
                                             onClick={(e) => {
                                                // e.stopPropagation();
                                                setSelectedSizes(i.val);
                                             }}>
                                             {i.label}
                                          </li>
                                       ))}
                                 </ul>
                              )}
                           </div>
                        </div>
                        <div className="quantity py-3 d-flex align-items-center">
                           <span className="minus">-</span>
                           <span className="numb px-3 py-1 mx-3">1</span>
                           <span className="plus">+</span>
                        </div>
                        <button className="add-to-cart text-uppercase">add to cart</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductInfo;
