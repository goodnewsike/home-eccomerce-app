import {withFormsy} from 'formsy-react';
import {useState, useEffect, useRef} from 'react';

const TextInput = (props) => {
   const isFile = props.type === 'file';
   const changeValue = (e) => {
      // setValue() will set the value of the component, which in
      // turn will validate it and the rest of the form
      // Important: Don't skip this step. This pattern is required
      // for Formsy to work.
      props.setValue(isFile ? e.target.files[0] : e.currentTarget.value);
      props.clearError && typeof props.clearError === 'function' && props.clearError();
      props.onValueChange && typeof props.onValueChange === 'function' && props.onValueChange(isFile ? e.target.files[0] : e.currentTarget.value);
   };
   const [focused, setFocused] = useState(false);
   const fileInput = useRef();
   useEffect(() => {
      if (!!props.valError) setFocused(true);
   }, [props.valError]);

   // An error message is passed only if the component is invalid
   const errorMessage = props.errorMessage || props.valError;
   const helperText = props.helperText;

   const ErrorText = () =>
      typeof errorMessage === 'object' ? (
         errorMessage.map((message, i) => (
            <span key={i} className="error-text mt-2 d-block">
               {message}
            </span>
         ))
      ) : (
         <span className="error-text mt-2 d-block">{errorMessage}</span>
      );

   return (
      <div className={props.mainWrapperClassName}>
         {props.labelText && <span className={props.labelClassName}>{props.labelText}</span>}
         <div className={props.wrapperClassName}>
            {props.leftIcon}
            {props.rightIcon}
            {!isFile ? (
               props.textarea ? (
                  <textarea
                     onChange={changeValue}
                     onFocus={() => setFocused(true)}
                     onBlur={() => setFocused(props.useFocusedError ? (props.valError ? true : false) : true)}
                     placeholder={props.placeholder}
                     className={props.className}
                     value={props.value || ''}
                     disabled={props.disabled}
                     borderless={props.borderless}
                  />
               ) : (
                  <input
                     onChange={props.onChange || changeValue}
                     onFocus={() => setFocused(true)}
                     onBlur={(() => setFocused(props.useFocusedError ? (props.valError ? true : false) : true), props.onBlurFunc)}
                     // onBlurFunc={props.onBlurFunc}
                     autoComplete={props.autoComplete || 'off'}
                     type={props.type || 'text'}
                     placeholder={props.placeholder}
                     className={props.className}
                     value={props.value || ''}
                     disabled={props.disabled}
                     borderless={props.borderless}
                  />
               )
            ) : (
               <input
                  type="file"
                  ref={fileInput}
                  className="file-input w-100"
                  onChange={changeValue}
                  accept=".jpg, .jpeg, .png"
                  disabled={props.disabled}
               />
            )}
         </div>
         {!isFile && !props.isPristine && focused && errorMessage && <ErrorText />}
         {isFile && errorMessage && <ErrorText />}
         {!!helperText && <span className="error-text mt-2 d-block">{helperText}</span>}
      </div>
   );
};

export default withFormsy(TextInput);
