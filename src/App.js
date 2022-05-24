import {useState} from 'react';
import './App.css';
import FormInput from './componet/FormInput';



const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    
  })

  const inputs = [
    {    
      id: 1,
      name:"username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3 - 16 characters and shouldnt include any special character",
      lable: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      require: true,
    },
    {    
      id: 2,
      name:"email",
      type: "email",
      placeholder: "email",
      errorMessage: "it should be a valide email address",
      lable: "email",
      require: true,
    },
    {    
      id: 3,
      name:"birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      lable: "Birthday",
    },
    {    
      id: 4,
      name:"password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8 - 20 characters and in should include at least one letter, one number, and one speical charater",
      lable: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      require: true,
    },
    {    
      id: 5,
      name:"confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password dont match!",
      lable: "Confirm Password",
      pattern: values.password,
      require: true,
    }
  ]

  const handleSubmit = (e) =>{
  e.preventDefault();

  // const data = new FormData(e.target)
  // console.log(Object.fromEntries(data.entries()))
};

const onChange = (e) =>{
  setValues({...values, [e.target.name]:e.target.value})
};

console.log(values)
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
      <FormInput key={input.id} {...input} values={values[input.name]} onChange={onChange} />
        ))}
     
      <button>Submit</button>

      </form>
    </div>
  )
}

export default App
