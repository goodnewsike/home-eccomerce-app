import React, {useState} from 'react';
import Products from '../../_components/Products';
import {categories} from '../../_constants/Categories';
import {products} from '../../_constants/Products';
import Advert from '../../_components/Advert';
import Banner from '../../_components/Banner';
import './index.scss';

const Furniture = () => {
   const [options, setOptions] = useState(1);
   return (
      <div className="__furniture container-fluid p-0">
         <Banner />

         <div className="container p-0 py-3 categories">
            <div className="d-flex align-items-center flex-wrap py-4">
               {categories.map((item) => (
                  <div key={item.id} onClick={() => setOptions(item.optionsList)} className="inner me-3 mb-2">
                     <h3 className="">{item.title}</h3>
                  </div>
               ))}
            </div>
         </div>

         {options === 1 && <Products data={products} />}
         {options === 2 && <Products data={products} />}
         {options === 3 && <Products data={products} />}
         {options === 4 && <Products data={products} />}
         {options === 5 && <Products data={products} />}
         {options === 6 && <Products data={products} />}

         <Advert />
      </div>
   );
};

export default Furniture;
