import { useState } from "react"
import axios from 'axios'

const Register = () => 
{
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  })



  return (
    <>
      <div>
        <h2>Register</h2>
      </div>
    </>
  )
}

export default Register
