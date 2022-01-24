import React from 'react';
import {Link} from 'react-router-dom';
import Formsy from 'formsy-react';
import TextInput from '../../_components/TextInput';
import './index.scss';

const Login = () => {
   return (
      <div className="container-fluid p-0 wrapper">
         <div className="container p-0">
            <div className="login d-flex align-items-center justify-content-center">
               <div className="contents">
                  <Formsy className="__form p-4 d-flex flex-column align-items-center justify-content-center">
                     <h5 className="text-capitalize py-2">login</h5>
                     <TextInput
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        mainWrapperClassName=""
                        wrapperClassName=""
                        className="input my-3 border-0"
                        // useFocusedError
                        // validations="isEmail"
                        // validationErrors={{
                        //    isEmail: 'This is not a valid email',
                        //    required: 'Required!',
                        // }}
                     />
                     <TextInput
                        type="text"
                        name="password"
                        placeholder="Password"
                        mainWrapperClassName=""
                        wrapperClassName=""
                        className="input my-3 border-0"
                        // useFocusedError
                        // required
                        // validationError="Please provide your password!"
                     />
                     <button className="login-btn my-3 text-capitalize">login</button>
                     <button className="reset-password">
                        Can't remember you password? <br />
                        <Link to="/forgot-password" className="ms-2 text-capitalize plain">
                           reset password
                        </Link>
                     </button>
                     <button className="reg mt-3">
                        <Link to="/signup" className="text-capitalize plain me-4">
                           register
                        </Link>
                     </button>
                  </Formsy>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
