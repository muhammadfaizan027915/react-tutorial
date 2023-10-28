import { useEffect, useState } from "react";
import "./styles.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name])

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onPhoneChange = (event) => {
    console.log(event.target.value);
    setPhone(event.target.value);
  };

  const onEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

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

  return (
    <form className="formContainer">
      <h2>Sign up</h2>
      <label className="fieldContainer">
        Name:
        <input
          type="text"
          name="name"
          className="inputField"
          onChange={onNameChange}
        />
      </label>

      <label className="fieldContainer">
        Phone:
        <input
          type="tel"
          name="phone"
          className="inputField"
          onChange={onPhoneChange}
        />
      </label>

      <label className="fieldContainer">
        Email:
        <input
          type="email"
          name="email"
          className="inputField"
          onChange={onEmailChange}
        />
      </label>

      <label className="fieldContainer">
        Password:
        <input
          type="password"
          name="password"
          className="inputField"
          onChange={onPasswordChange}
        />
      </label>

      <button type="submit">Sign up</button>
    </form>
  );
};

export default RegistrationForm;
