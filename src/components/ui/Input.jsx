import React from 'react'

const Input = ({ type, name, value, onChange, for, label }) => 
{
  return (
    <>
      <label htmlFor={for}>{label}</label>
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="input"
      />
    </>
  )
}

export default Input
