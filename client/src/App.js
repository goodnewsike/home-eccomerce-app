import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import NotFound from './Pages/404';
import AllProducts from './Pages/AllProducts';
import Cart from './Pages/Cart';
import Furniture from './Pages/Furniture';
import FurnitureItem from './Pages/FurnitureItem';
import House from './Pages/House';
import Interior from './Pages/Interior';
import Login from './Pages/Login';
import ProductInfo from './Pages/ProductInfo';
import Signup from './Pages/SignUp';
import Footer from './_navigation/Footer';
import Navbar from './_navigation/Navbar';

const App = () => {
   return (
      <div className="container-fluid p-0">
         <div className="row m-0">
            <Navbar />
            <Switch>
               <Route exact path="/" component={Furniture} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/signup" component={Signup} />

               <Route exact path="/house" component={House} />
               <Route exact path="/interior" component={Interior} />
               <Route exact path="/furniture" component={Furniture} />
               <Route exact path="/cart" component={Cart} />
               <Route exact path="/furniture/:id" component={FurnitureItem} />
               <Route exact path="/all-products" component={AllProducts} />
               <Route exact path="/product-info/:id" component={ProductInfo} />
               <Route component={NotFound} />
            </Switch>
            <Footer />
         </div>
      </div>
   );
};

export default withRouter(App);
