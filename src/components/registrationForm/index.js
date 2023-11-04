import { useEffect, useState } from "react";
import "./styles.css";

const RegistrationForm = () => {
  // Without states
  // const formSubmit = (event) => {
  //     event.preventDefault();
  //     const formData = new FormData(event.target)

  //     const userInfo  = {
  //         name: formData.get('name'),
  //         phone: formData.get('phone'),
  //         email: formData.get('email'),
  //         password: formData.get('password')
  //     }

  //     console.log(userInfo)

  // }

  // Method 1 using states
  //   const [name, setName] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");

  //   const onNameChange = (event) => {
  //     setName(event.target.value);
  //   };

  //   const onPhoneChange = (event) => {
  //     setPhone(event.target.value);
  //   };

  //   const onEmailChange = (event) => {
  //     setEmail(event.target.value);
  //   };

  //   const onPasswordChange = (event) => {
  //     if (event.target.value.length > 6) {
  //       setError("Password length should be a 6 charachers!");
  //     } else {
  //       setPassword(event.target.value);
  //       setError("");
  //     }
  //   };

  // Method 2 using states
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // const onInputValue = (event) =>  {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     setInputValues((prev) => {

  //         if(name == 'name' ) {
  //             prev.name = value
  //         }  else if (name == 'phone') {
  //             prev.phone = value
  //         } else if (name == 'email') {
  //             prev.email = value
  //         } else {
  //             prev.password = value
  //         }

  //         const newInputValue = prev

  //         return newInputValue
  //     })
  // }

  // Method 3 using states
  // const onInputValue = (event) => {
  //     const key = event.target.name;
  //     const value = event.target.value;

  //     setInputValues(prev => {
  //         const newValue = {...prev, [key]: value }
  //         return newValue;
  //     })

  // }

  // Online liner form handling using states, destuructring, arrow function and spread operator
  const onInputValue = ({ target: { name, value, } }) => setInputValues((prev) => ({ ...prev, [name]: value }));

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(inputValues);
  };

  return (
    <form className="formContainer" onSubmit={onSubmitForm}>
      <h2>Sign up</h2>
      <label className="fieldContainer">
        Name:
        <input type="text" name="name" className="inputField" onChange={onInputValue} />
      </label>

      <label className="fieldContainer">
        Phone:
        <input type="tel" name="phone" className="inputField" onChange={onInputValue} />
      </label>

      <label className="fieldContainer">
        Email:
        <input type="email" name="email" className="inputField" onChange={onInputValue} />
      </label>

      <label className="fieldContainer">
        Password:
        <input type="password" name="password" className="inputField" onChange={onInputValue} />
      </label>

      <button type="submit">Sign up</button>
    </form>
  );
};

export default RegistrationForm;
