import { useState } from "react"
import { Input } from '../components/importComponents'
import axios from 'axios'

const Register = () => 
{
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const [message, setMessage] = useState('');

  const { username, password, email } = formData;

  const changeHandler = (e) =>
  {
    setFormData({ ...formData, [e.target.name]: e.target.value});
    console.log(formData);
  };

  const formSubmit = async (e) =>
  {
    e.preventDefault();

    try
    {
      const res = await axios.post('http://localhost:5000/api/auth/register',
      {
        username, password, email
      });
      setMessage('Registration successful');
    }
    catch (err)
    {
      console.error(err);
      setMessage('Registration failed');
    }
  };

  return (
    <>
      <div>
        <h2>Register</h2>
        <form className="form" onSubmit={formSubmit}>
          <Input type={"text"} name={"username"} value={username} onChange={changeHandler} />
          <Input type={"password"} name={"password"} value={password} onChange={changeHandler} />
          <Input type={"email"} name={"email"} value={email} onChange={changeHandler} />
          <button type="submit">Register</button>
        </form>
        <p>{message}</p>
      </div>
    </>
  )
}

export default Register
