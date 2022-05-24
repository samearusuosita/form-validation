import { useState } from 'react';
import '../componet/FormInput.css'


const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const{lable, errorMessage, onChane, id, ...inputProps} = props; 
    const handleFocus = (e)=>{
        setFocused(true);
    }
  return (
    <div className="formInput">
        <label>{lable}</label>
         <input {...inputProps} 
         onChange={onChane} 
         onBlur={handleFocus} 
         onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)}
         focused={focused.toString()}/>
         <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
