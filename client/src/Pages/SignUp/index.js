import React from 'react';
import {Link} from 'react-router-dom';
import Formsy from 'formsy-react';
import TextInput from '../../_components/TextInput';
import './index.scss';

const Signup = () => {
   return (
      <div className="container-fluid p-0 wrapper">
         <div className="container p-0">
            <div className="login d-flex align-items-center justify-content-center">
               <div className="contents">
                  <Formsy className="__form p-4 d-flex flex-column align-items-center justify-content-center">
                     <h5 className="text-capitalize py-2">sign up</h5>
                     <TextInput
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        mainWrapperClassName=""
                        wrapperClassName=""
                        className="input my-2 border-0"
                        // useFocusedError
                        // validations="isEmail"
                        // validationErrors={{
                        //    isEmail: 'This is not a valid email',
                        //    required: 'Required!',
                        // }}
                     />
                     <TextInput
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        mainWrapperClassName=""
                        wrapperClassName=""
                        className="input my-2 border-0"
                        // useFocusedError
                        // validations="isEmail"
                        // validationErrors={{
                        //    isEmail: 'This is not a valid email',
                        //    required: 'Required!',
                        // }}
                     />
                     <TextInput
                        type="text"
                        name="username"
                        placeholder="Username"
                        mainWrapperClassName=""
                        wrapperClassName=""
                        className="input my-2 border-0"
                        // useFocusedError
                        // validations="isEmail"
                        // validationErrors={{
                        //    isEmail: 'This is not a valid email',
                        //    required: 'Required!',
                        // }}
                     />
                     <TextInput
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        mainWrapperClassName=""
                        wrapperClassName=""
                        className="input my-2 border-0"
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
                        className="input my-2 border-0"
                        // useFocusedError
                        // required
                        // validationError="Please provide your password!"
                     />
                     <p className="agreement">
                        By creating an account, I consent to the processing of my personal data in accordance with the
                        <a href="#!" className="ms-2">
                           Privacy Policy
                        </a>
                     </p>
                     <button className="regi text-capitalize">register</button>
                     <button className="log mt-3">
                        <Link to="/login" className="text-capitalize plain me-4">
                           login
                        </Link>
                     </button>
                  </Formsy>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Signup;
